import React from 'react';
import ReserveMap from './reserve-page/ReserveMap';
import ReserveTable from './reserve-page/ReserveTable';
import DateSelector from './reserve-page/DateSelector'
import RightSideBar from './reserve-page/RightSideBar'
import Ammenities from './reserve-page/Ammenities'
import './Reserve.css'
import _ from 'lodash';

class Reserve extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      displayInformation:
          {
            roomSelected: false,
            time: null,
            room: null,
            building: null
          }
    }

    this.toggleView = this.toggleView.bind(this);
    this.setPickedRoom = this.setPickedRoom.bind(this);
    this.setDate = this.setDate.bind(this);
    this.deSelectRoom = this.deSelectRoom.bind(this);
  }

  setPickedRoom(time, room, building) {
    var stateHolder = _.clone(this.state);
    stateHolder.displayInformation = {roomSelected: true, time: time, room: room, building: building};
    this.setState(stateHolder);
  }

  setDate(newDate) {
    var stateHolder = _.clone(this.state);
    stateHolder.date = newDate.toDateString();
    this.setState(stateHolder);
  }

  deSelectRoom() {
    var stateHolder = _.clone(this.state);
    stateHolder.displayInformation =
    {
        roomSelected: false,
        time: null,
        room: null,
        building: null
    }
    this.setState(stateHolder);
  }

  toggleView() {
    var stateHolder = _.clone(this.state);
    stateHolder.showMap = !stateHolder.showMap;
    this.setState(stateHolder);
  }
  render() {
    return (
    <div className="reserve-main">
        <div className="left-side-reserve">
          <DateSelector setDate={this.setDate}/>
          <Ammenities displayInformation={this.state.displayInformation}/>
        </div>
        <div className="middle-reserve">
          <h2>{this.props.building} : {this.state.date}</h2>
          {_.get(this.state,'showMap',false) ? <ReserveMap setPickedRoom={this.setPickedRoom} deSelectRoom={this.deSelectRoom}/> : <ReserveTable  setPickedRoom={this.setPickedRoom}  deSelectRoom={this.deSelectRoom} numberRooms={10} showFloorButtons={true}/>}
        </div>
        <div className="right-side-reserve">
            <RightSideBar toggleView={this.toggleView}/>
        </div>
    </div>
  )

  }
}

export default Reserve;
