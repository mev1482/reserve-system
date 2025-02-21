import React from 'react';
import ReserveMap from './reserve-page/ReserveMap';
import ReserveTable from './reserve-page/ReserveTable';
import DateSelector from './reserve-page/DateSelector';
import Ammenities from './reserve-page/Ammenities';
import ReserveData from './reserve-page/ReserveData';
import SubmitButton from './reserve-page/SubmitButton';
import ButtonSection from './reserve-page/ButtonSection';
import './Reserve.css';
import _ from 'lodash';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.reserveData = new ReserveData();
    const timeColumns = this.reserveData.createColumns();
    const data = this.reserveData.fakeData(0, 10);
    const buildingInfo = this.reserveData.buildingInfo(_.get(props.location, 'state.location',null));

    var canRecur = false;
    if(props.username === "Mr.Smith") {
      canRecur = true;
    }
    else if(props.username === "mev5063" &&
       _.get(this.props.location.state,'location') === "recreation") {
         canRecur =true;
    }

    this.state = {
      showMap: false,
      endDate: (new Date(Date.now() + 6996e5)).toDateString(),
      timeColumns,
      canRecur,
      isRecurring: false,
      data,
      buildingInfo,
      floorSelected: 0,
      displayInformation:
          {
            roomSelected: false,
            selectedTime: null,
            selectedRoom: null,
            building: _.get(props.location, 'state.location',null),
          },
    };

    this.toggleView = this.toggleView.bind(this);
    this.setPickedRoom = this.setPickedRoom.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setData = this.setData.bind(this);
    this.deselectRoom = this.deselectRoom.bind(this);
    this.isRecurring = this.isRecurring.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }

  setData(floorSelected) {
    const stateHolder = _.clone(this.state);
    stateHolder.data = this.reserveData.fakeData(0, stateHolder.showMap ? 1 : 10);
    stateHolder.floorSelected = floorSelected;
    stateHolder.displayInformation = {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null,
    };
    this.setState(stateHolder);
  }

  setPickedRoom(column, data, building) {
    const stateHolder = _.clone(this.state);
    stateHolder.displayInformation = {
      roomSelected: true,
      selectedTime: column,
      selectedRoom: data,
    };
    _.forEach(stateHolder.data, (dataSegment) => {
      const keys = _.keys(dataSegment.timesAvailable);
      _.forEach(keys, (key) => {
        dataSegment.timesAvailable[key].selected = false;
      });

      if (dataSegment.id === data.id) {
        dataSegment.timesAvailable[column.selector].selected = true;
      }
    });
    this.setState(stateHolder);
  }

  setDate(newDate) {
    const stateHolder = _.clone(this.state);
    stateHolder.date = newDate.toDateString();
    stateHolder.displayInformation = {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null,
    };
    stateHolder.data = this.reserveData.fakeData(0, this.state.showMap ? 1 : 10);
    this.setState(stateHolder);
  }

  setEndDate(newDate) {
    const stateHolder = _.clone(this.state);
    stateHolder.endDate = newDate.toDateString();
    stateHolder.displayInformation = {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null,
    };
    stateHolder.data = this.reserveData.fakeData(0, this.state.showMap ? 1 : 10);
    this.setState(stateHolder);
  }

  isRecurring(isRecurring) {
    var stateHolder = _.clone(this.state);
    stateHolder.isRecurring = isRecurring;
    this.setState(stateHolder);
  }

  deselectRoom(time, room) {
    const stateHolder = _.clone(this.state);
    _.forEach(stateHolder.data, (dataSegment) => {
      if (dataSegment.id === room.id) {
        dataSegment.timesAvailable[time.selector].selected = false;
      }
    });

    stateHolder.displayInformation = {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null,
    };
    this.setState(stateHolder);
  }

  toggleView() {
    const stateHolder = _.clone(this.state);
    stateHolder.showMap = !stateHolder.showMap;
    stateHolder.data = this.reserveData.fakeData(0, stateHolder.showMap ? 1 : 10);
    stateHolder.displayInformation = {
      roomSelected: false,
      selectedTime: null,
      selectedRoom: null,
      building: null,
    };
    this.setState(stateHolder);
  }

  render() {
    const { state } = this;
    const building =_.get(this.props.location.state,'location')
    return (
      <div className="reserve-main">
        <div className="left-side-reserve">
          <DateSelector isRecurring={this.isRecurring} setDate={this.setDate} canRecur={state.canRecur} setEndDate={this.setEndDate} />
          <Ammenities displayInformation={state.displayInformation} />
          <SubmitButton building={building} reservationInfo={_.clone(this.state.displayInformation)}/>
        </div>
        <div className="middle-reserve">
          <h2>
            {_.capitalize(building)}
            {' '}:
            {' '}
            {state.date}
            {this.state.isRecurring ? " - " + this.state.endDate : ''}
          </h2>
          <ButtonSection
            floors={_.get(state.buildingInfo,'floors',[])}
            floorSelected={state.floorSelected}
            changeFloor={this.setData}
            toggleView={this.toggleView}
            showMap={state.showMap}
          />
          {_.get(state, 'showMap', false)
            ? (
              <ReserveMap
                columns={state.timeColumns}
                data={state.data}
                floorImages={_.get(state.buildingInfo,'floorImages',[])}
                floorSelected={state.floorSelected}
                setPickedRoom={this.setPickedRoom}
                deselectRoom={this.deselectRoom}
              />
            )
            : (
              <ReserveTable
                floors={[]}
                columns={state.timeColumns}
                data={state.data}
                setPickedRoom={this.setPickedRoom}
                deselectRoom={this.deselectRoom}
                showFloorButtons={true}
              />
            )}
        </div>
      </div>
    );
  }
}

export default Reserve;
