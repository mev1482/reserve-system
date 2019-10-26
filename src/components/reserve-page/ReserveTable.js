import React from 'react';
import _ from 'lodash';
import DataTable from 'react-data-table-component';
import FloorLevelButtons from './FloorLevelButtons';
import ReserveData from './ReserveData';

class ReserveTable extends React.Component {
  constructor(props) {
    super(props);
    const reserveData = new ReserveData();
    const timeColumns = reserveData.createColumns();
    const fakeData = reserveData.fakeData(0, props.numberRooms);
    this.state = {
      building: 'Library', // to be taken in as a props attribute,
      floors: ['Ground', 'First', 'Second', 'Third', 'Fourth'], // to be taken in as props attribute
      floorSelected: 0,
      columns: timeColumns,
      data: fakeData,
      reserveData: reserveData,
      numberRooms: props.numberRooms,
    };

    this.changeFloor = this.changeFloor.bind(this);
  }

  sortFunction(data, field, asc) {
    if (_.isNull(field)) {
      return data;
    }
    const dataAvailable = [];
    const dataUnavaiable = [];
    _.forEach(data, (row) => {
      if (row.timesAvailable.includes(field)) {
        dataAvailable.push(row);
      } else {
        dataUnavaiable.push(row);
      }
    });
    const allData = [...dataAvailable, ...dataUnavaiable];
    return allData;
  }

  changeFloor(newFloor) {
    const stateHolder = _.clone(this.state);
    stateHolder.floorSelected = newFloor;
    stateHolder.data = this.state.reserveData.fakeData(newFloor, this.state.numberRooms);
    this.setState(stateHolder);
  }

  render() {
    return (
      <div className="reserve-table-holder">
        {_.get(this.props, 'showFloorButtons', false) ? <FloorLevelButtons floors={this.state.floors} changeFloor={this.changeFloor} floorSelected={this.state.floorSelected} /> : <></>}
        <DataTable
          title={`${this.state.building} ${this.state.floors[this.state.floorSelected]} floor`}
          columns={this.state.columns}
          data={this.state.data}
          sortFunction={this.sortFunction}
          className='reserve-table'
        />
      </div>
    );
  }
}

export default ReserveTable;
