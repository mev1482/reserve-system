import React from 'react';
import _ from 'lodash';
import './confirm-page.css'

function RoomInfoDisplay(props) {
  console.log(props.roomAmmenities)
  return (
    <div className="room-info-display-component">
      <h2 className="black-header">Reservation Summary</h2>
      <div className="reservation-info">
        <h2>Username:</h2>
        <h3 className="display-info"><i>{props.username}</i></h3>
        <h2>Account Level:</h2>
        <h3 className="display-info"><i>{props.accountLevel}</i></h3>
        <h2>Building:</h2>
        <h3 className="display-info"><i>{props.building}</i></h3>
        <h2>Room:</h2>
        <h3 className="display-info"><i>{props.roomNumber}</i></h3>
        <h2>Room ammenities:</h2>
        <h3 className="display-info">
          <ul className="ammenities-list">
            {_.get(props.roomAmmenities,'ammenitiesList',['ammenity1','ammenity2','ammenity3']).map((ammenity) => (
              <li><i>{ammenity}</i></li>
            ))}
          </ul>
        </h3>
        <h2>Time:</h2>
        <h3 className="display-info"><i>{props.time}</i></h3>
      </div>
    </div>
  );
}

export default RoomInfoDisplay;
