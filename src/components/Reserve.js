import React from 'react';
import ReserveMap from './reserve-page/ReserveMap';
import ReserveTable from './reserve-page/ReserveTable';
import DateSelector from './reserve-page/DateSelector'
import RightSideBar from './reserve-page/RightSideBar'
import Ammenities from './reserve-page/Ammenities'
import ReserveData from './reserve-page/ReserveData';
import './Reserve.css'
import _ from 'lodash';

class Reserve extends React.Component {

  constructor(props) {
    super(props);
    this.reserveData = new ReserveData();
    const timeColumns = this.reserveData.createColumns();
    const data = this.reserveData.fakeData(0, 10);

    this.state = {
      showMap: false,
      timeColumns: timeColumns,
      data: data,
      displayInformation:
          {
            roomSelected: false,
            selectedTime: null,
            selectedRoom: null,
            building: props.location
          }
    }


    this.toggleView = this.toggleView.bind(this);
    this.setPickedRoom = this.setPickedRoom.bind(this);
    this.setDate = this.setDate.bind(this);
    this.deselectRoom = this.deselectRoom.bind(this);
  }

  setData() {
    var stateHolder = _.clone(this.state);
    stateHolder.data = this.reserveData.fakeData(0, this.state.showMap ? 1 : 10);
    this.setState(stateHolder);
  }

  setPickedRoom(column, data, building) {
    var stateHolder = _.clone(this.state);
    console.log(column,data)
    stateHolder.displayInformation =
    {
      roomSelected: true,
      selectedTime: column,
      selectedRoom: data
    }
    _.forEach(stateHolder.data, (dataSegment) => {
      var keys = _.keys(dataSegment.timesAvailable);
      _.forEach(keys, (key)=> {
        dataSegment.timesAvailable[key].selected = false;
      });

      if (dataSegment.id === data.id) {
        dataSegment.timesAvailable[column.selector].selected = true;
      }
    });
    this.setState(stateHolder);
  }

  setDate(newDate) {
    console.log("date",newDate)
    var stateHolder = _.clone(this.state);
    stateHolder.date = newDate.toDateString();
    stateHolder.displayInformation =
    {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null
    }
    stateHolder.data = this.reserveData.fakeData(0, this.state.showMap ? 1 : 10);
    this.setState(stateHolder);
  }

  deselectRoom(time, room) {
    var stateHolder = _.clone(this.state);
    _.forEach(stateHolder.data, (dataSegment) => {
      if (dataSegment.id === room.id) {
        dataSegment.timesAvailable[time.selector].selected = false;
      }
    });

    stateHolder.displayInformation =
    {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null
    }
    this.setState(stateHolder);
  }

  toggleView() {
    var stateHolder = _.clone(this.state);
    stateHolder.showMap = !stateHolder.showMap;
    stateHolder.data = this.reserveData.fakeData(0, stateHolder.showMap ? 1 : 10);
    stateHolder.displayInformation =
    {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null
    }
    this.setState(stateHolder);
  }
  render() {
    let state = this.state;
    return (
    <div className="reserve-main">
        <div className="left-side-reserve">
          <DateSelector setDate={this.setDate}/>
          <Ammenities displayInformation={state.displayInformation}/>
        </div>
        <div className="middle-reserve">
          <h2>{this.props.building} : {state.date}</h2>
          {_.get(state,'showMap',false) ?
              <ReserveMap
                 floors={[]}
                 columns={state.timeColumns}
                 data={state.data}
                 setPickedRoom={this.setPickedRoom}
                 deselectRoom={this.deselectRoom}
                 numberRooms={1}/> :
              <ReserveTable
                  floors={[]}
                  columns={state.timeColumns}
                  data={state.data}
                  setPickedRoom={this.setPickedRoom}
                  deselectRoom={this.deselectRoom}
                  numberRooms={10}
                  showFloorButtons={true}/>
          }
        </div>
        <div className="right-side-reserve">
            <RightSideBar toggleView={this.toggleView}/>
        </div>
    </div>
  )

  }
}

export default Reserve;
