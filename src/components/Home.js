import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Reservations from './home/Reservations';
import Events from './home/Events';
import './Home.css';

function createReservation(date, building, room, time, endTime) {
  return {
    date, building, room, time, endTime,
  };
}

function createEvent(date, event, location, time, endTime) {
  return {
    date, event, location, time, endTime,
  };
}

// Mock reservations
const reservations = [
  createReservation('12/03/19', 'Library', 1000, '10:00 AM', '11:00 AM'),
  createReservation('12/03/19', 'Library', 2003, '1:00 PM', '3:00 PM'),
  createReservation('12/05/19', 'Library', 1012, '12:00 PM', '1:00 PM'),
];

const events = [
  createEvent('12/03/19', 'Information Session', 'Golisano', '9:00 AM', '12:00 PM'),
  createEvent('12/04/19', 'Thesis Defense', 'Gosnell', '4:00 PM', '6:00 PM'),
  createEvent('12/05/19', 'Meet and Greet', 'Liberal Arts Hall', '1:00 PM', '3:00 PM'),
];

export default function Home() {
  return (
    <div className="Home">
      <Link className="reserveLink" to="/reserve">
        <Button id="reserve-button" variant="contained">Reserve</Button>
      </Link>
      <div className="home-container">
        <Reservations
          reservations={reservations}
        />
        <Events
          events={events}
        />
      </div>
    </div>
  );
}
