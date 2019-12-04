import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ConfirmButton from './ConfirmButton';
import _ from 'lodash';
import './confirm-page.css'

function RoomInfoDisplay(props) {
  let ammenities = {};
  return (
    <div className="room-info-display-component">
      <h2 className="black-header">Reservation Summary</h2>
      <div className="reservation-info">
        <h2>Username:</h2>
        <h3 className="mark"><i>mev5063@rit.edu</i></h3>
        <h2>Account Level:</h2>
        <h3 className="mark"><i>Student</i></h3>
        <h2>Building:</h2>
        <h3 className="mark"><i>Library</i></h3>
        <h2>Room:</h2>
        <h3 className="mark"><i>1001</i></h3>
        <h2>Room ammenities:</h2>
        <h3 className="mark">
          <ul className="ammenities-list">
            {_.get(ammenities,'ammenitiesList',['ammenity1','ammenity2','ammenity3']).map((ammenity) => (
              <li><i>{ammenity}</i></li>
            ))}
          </ul>
        </h3>
        <h2>Time:</h2>
        <h3 className="mark"><i>1:30 am</i></h3>
      </div>
    </div>
  );
}

export default RoomInfoDisplay;
