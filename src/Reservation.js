import React from 'react';
import Card from './Card.js';
import './Reservation.css';

const Reservation = ({reservations}) => {
    const findReservations = reservations.map(reservationDetail => {
            return (
              <Card
                name={reservationDetail.name}
                date={reservationDetail.date}
                time={reservationDetail.time}
                number={reservationDetail.number}
              />
            )
          })

    return(
        <div className="reservations-container">
            {findReservations}
        </div>
    )
}

export default Reservation;