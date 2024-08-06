import { useState } from 'react'
import Navbar from '../components/navbar'
import { GetAllBuses } from '../services/customer'
import { useEffect } from 'react'
import bg from "../Images/BusHome.jpeg"
import { useLocation,useNavigate } from 'react-router-dom'
function Buses() {
    
    debugger;
    const [Buses, setBuses] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    
    const onReserve = () =>{
      
      navigate(`/reservation`);
    }
    const loadBuses = async () => {
        const result = await GetAllBuses()
        if (result['status'] == 200) {
          const params = new URLSearchParams(location.search);
            const origin = params.get('origin')?.toLowerCase() || '';
            const destination = params.get('destination')?.toLowerCase() || '';
            const journeyDate = params.get('journeyDate') || '';

            const filteredBuses = result['data'].filter(bus => 
                bus['source'].toLowerCase() === origin && 
                bus['destination'].toLowerCase() === destination && 
                bus['journeyDate'] === journeyDate
            );
            console.log(filteredBuses)
            setBuses(filteredBuses);
          //setBuses(result['data'])

        }
        console.log("Bus:"+Buses)
      }
    
      useEffect(() => {
        debugger;
        // this function will be called immediately after component gets loaded
        loadBuses();
        
    }, [])
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
    }}>
     <Navbar />
      <br /><h2 className='page-header'style={{color:"white"}}>Available Buses</h2> <br />
      <table className='table table-striped container' style={{borderRadius:"10px",        
      }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Bus Type</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Journey Date</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {Buses.map((bus, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                
                <td>{bus['busNumber']}</td>
                <td>{bus['busType']}</td>
                <td>{bus['source']}</td>
                <td>{bus['destination']}</td>
                <td>{bus['fare']}</td>
                <td>{bus['journeyDate']}</td>
                <td>{bus['arrivalTime']}</td>
                <td>{bus['departureTime']}</td>
                
                
                <td>
                  <button on onClick={onReserve} className='btn btn-sm btn-success me-2'>Reserve Seat
                  </button>
                  
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default Buses
