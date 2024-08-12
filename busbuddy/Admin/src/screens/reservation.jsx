import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { reserveSeats,getAvailableSeats } from '../services/customer';
import { toast } from 'react-toastify';
import NavbarCustomer from '../components/navbarCustomer';
import bg from "../Images/BusHome.jpeg";

const Reservation = () => {
    const customerString = sessionStorage.getItem('customer');

    const customer = JSON.parse(customerString);
    
    const userId = customer.id;
    
    console.log("Reservation",userId); 

  const { busId } = useParams();
  //const [userId, setUserId] = useState(customerId.id);
  const [seatNumber, setseatNumber] = useState([]);


  const createSeats = (num) => {
    return Array.from({ length: num }, (_, i) => ({
      id: i+1,
      reserved: false,
      selected: false,
    }));
  };

  const initialSeats = createSeats(30);
  // initialSeats[2].reserved = true; // Example reserved seat
  // initialSeats[6].reserved = true; // Example reserved seat

  const loadAvailableBusSeat = async () => {
    debugger;
    try {
      const result = await getAvailableSeats(busId);
      if (result.status === 200) {
        const updatedSeats = seats.map((seat, index) => ({
          ...seat,
          reserved: result.data[index] === 'FALSE'
        }));
        setSeats(updatedSeats);
      }
    } catch (err) {
      // Optionally log the error
      console.error("Error fetching buses:", err);
    }
  };

  useEffect(() => {
    loadAvailableBusSeat();
  }, []);


  const [seats, setSeats] = useState(initialSeats);
  const [name, setName] = useState('');
  

  const nav = useNavigate();

  const toggleSeatSelection = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
  };

  const confirmReservation = async () => {
    const selectedSeats = seats.filter((seat) => seat.selected);
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    // alert(
    //   `Reservation confirmed for seats: ${selectedSeats
    //     .map((seat) => seat.id)
    //     .join(', ')}`
    // );
    
    try {
      const data = await reserveSeats({busId, userId, seatNumber,
        headers: {
          'Content-Type': 'application/json'
        }});
      console.log(seatNumber);
      console.log(userId);
      console.log(busId);
      toast.success('Seat Reservation Successful!!!');
      nav(`/ticket/${busId}&&${seatNumber}`);
    }
    catch(er){
      console.log(er);
      toast.error('Reservation Failed. Please Try Again');
    }
  };

  return (
    

      <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            padding: "20px"
        }}>
      <NavbarCustomer />

      <h2 className='page-header' style={{color:"white"}}>Reserve Seat</h2>

      <div className="bus-layout">
        {seats.map((seat) => (
          <div
            key={seat.id}

            

            className={`seat ${seat.reserved ? 'reserved' : ''} ${seat.selected ? 'selected' : ''
              }`}
            // onClick={() => !seat.reserved && toggleSeatSelection(seat.id) &&  setseatNumber(seat.id)}
            onClick={() => {
              if (!seat.reserved) {
                toggleSeatSelection(seat.id);
                setseatNumber(seat.id-1);
              }
            }}
            

            
            
          >
            {seat.id}
          </div>
        ))}
      </div>
      <div className='' style={{ display: 'grid', gridTemplateRows: 'repeat(3, auto)', gap: '10px' }}>
        <div className='seatD'>Available</div>
        <div className='seatD' style={{ backgroundColor: 'greenyellow' }}>Booking in progress</div>
        <div className='seatD' style={{ backgroundColor: '#faa0a0' }}><p>Booked</p></div>
    </div>

      <div className="details-form mt-3">
        
        <form>
                   <button type="button" className='btn btn-success mt-3 shadow p-3 mb-5 rounded' onClick={confirmReservation}
                   style={{margin:'56px'}}>
            Confirm Reservation
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Reservation;


