import React, { useState } from 'react';
import '../App.css'

const Reservation = () => {
  const createSeats = (num) => {
    return Array.from({ length: num }, (_, i) => ({
      id: i + 1,
      reserved: false,
      selected: false,
    }));
  };

  const initialSeats = createSeats(30);

  const [seats, setSeats] = useState(initialSeats);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [payment, setPayment] = useState('credit-card');

  const toggleSeatSelection = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
  };

  const confirmReservation = () => {
    const selectedSeats = seats.filter((seat) => seat.selected);
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    alert(
      `Reservation confirmed for seats: ${selectedSeats
        .map((seat) => seat.id)
        .join(', ')}`
    );
  };

  return (
    <div>
      <header>
        <h1>Bus Seat Reservation System</h1>
      </header>

      <div className="bus-layout">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.reserved ? 'reserved' : ''} ${
              seat.selected ? 'selected' : ''
            }`}
            onClick={() => !seat.reserved && toggleSeatSelection(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>

      <div className="details-form">
        <h2>Passenger Details</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          <br />
                    <button type="button" onClick={confirmReservation}>
            Confirm Reservation
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Reservation;