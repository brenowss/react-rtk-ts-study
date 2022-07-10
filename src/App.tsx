import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();

  function handleAddReservation() {
    if (reservationNameInput) {
      dispatch(addReservation(reservationNameInput));
      setReservationNameInput('');
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation, index) => (
                <ReservationCard
                  key={reservation}
                  index={index}
                  name={reservation}
                />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button type="button" onClick={handleAddReservation}>
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
