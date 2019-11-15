import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  }
}))

export default function Home() {
  const classes = useStyles();
  const [location, setLocation] = useState("library");

  const handleChange = e => {
    setLocation(e.target.value);
  }

  return (
    <div className="Home">
      <div className="form-container">
        <FormControl className={classes.formControl}>
          <InputLabel id="label">Choose Location</InputLabel>
          <Select
            labelId="label"
            id="location-select"
            value={location}
            onChange={handleChange}
          >
            <MenuItem value="library">Wallace Library Study Room</MenuItem>
            <MenuItem value="magic">MAGIC Specialty Space</MenuItem>
            <MenuItem value="recreation">Recreation Space</MenuItem>
          </Select>
        </FormControl>
        <Link className="reserveLink" to={`/reserve?location=${location}`}>
          <Button id="reserve-button" variant="contained">Reserve</Button>
        </Link>
      </div>
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
