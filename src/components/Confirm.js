import React from 'react';
import RoomInfoDisplay from './confirm-page/RoomInfoDisplay';
import Equipment from './confirm-page/Equipment';
import _ from 'lodash';
import './Confirm.css';


class Confirm extends React.Component {
  constructor(props) {
    super(props);


    this.state={equipmentSelected: []};
    this.reservationInformation =
    {
      roomSelected:
      {
        ammenities: {seats: 8, ammenitiesList: ['ammenity1','ammenity2']},
        id: 1,
        roomNumber: "1001",
        timeSelected: "1:30 am"
      },
      building: "library"
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
          <RoomInfoDisplay />
          <Equipment
            selectedEquipment={this.state.equipmentSelected}
            setEquipment={this.setEquipment}/>
      </div>
    );
  }
}
export default Confirm;
