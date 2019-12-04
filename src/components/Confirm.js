import React from 'react';
import RoomInfoDisplay from './confirm-page/RoomInfoDisplay';
import Equipment from './confirm-page/Equipment';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './Confirm.css';


class Confirm extends React.Component {
  constructor(props) {
    super(props);

    var
    reservationInformation = props.passedProps,
    roomSelected = props.passedProps.roomSelected;

    this.state={equipmentSelected: []};
    this.reservationInformation =
    {
      roomSelected:
      {
        ammenities: roomSelected.ammenities,
        id: roomSelected.id,
        roomNumber: roomSelected.roomNumber,
      },
      timeSelected: reservationInformation.timeSelected,
      building: reservationInformation.buildingSelected
    };

    this.setEquipment = this.setEquipment.bind(this);
  }

  setEquipment(equipment) {
    var stateHolder = _.clone(this.state);
    stateHolder.equipmentSelected = equipment;
    this.setState(stateHolder);
  }

  render() {
    return (
      <div className="Confirm">
          <RoomInfoDisplay
            username={this.props.username}
            accountLevel="student"
            building={this.reservationInformation.building}
            roomNumber={this.reservationInformation.roomSelected.roomNumber}
            roomAmmenities={this.reservationInformation.roomSelected.ammenities}
            time={this.reservationInformation.timeSelected}
          />
          <div className="right-side">
          <Equipment
            selectedEquipment={this.state.equipmentSelected}
            setEquipment={this.setEquipment}
            building={this.reservationInformation.building}/>
          <Link
              to={{
                pathname: '/',
                state: {username: this.props.username}
            }}>
              <div className="confirm-button">
              <Button className="confirm-button" color="primary" variant="contained">Submit</Button>
              </div>
          </Link>
          </div>
      </div>
    );
  }
}
export default Confirm;
