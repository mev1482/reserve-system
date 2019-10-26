import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DataTable from 'react-data-table-component';
import FloorLevelButtons from './FloorLevelButtons';

class ReserveTable extends React.Component {
  constructor(props) {
    super(props);
    const timeColumns = this.createColumns();
    const fakeData = this.fakeData();
    this.state = {
      building: 'Library', // to be taken in as a props attribute,
      floors: ['Ground', 'First', 'Second', 'Third', 'Fourth'], // to be taken in as props attribute
      floorSelected: 0,
      columns: timeColumns,
      data: fakeData,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFloor = this.changeFloor.bind(this);
  }

  createColumns() {
    const columnArray = [];
    columnArray.push(
      {
        name: 'Room Number',
        selector: 'roomNumber',
        sortable: true,
      }
    );

    var timeToUse;

    for (let i = 2; i < 24; i++) {
      timeToUse  = i > 12 ? i-12: i;
      var dayPortion = i >= 12 ? 'pm' : 'am';
      columnArray.push(
        {
          name: `${timeToUse}:00 ${dayPortion}`,
          selector: i,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i) ? <p style={{ 'background-color': 'green', width: '100%', height: '100%' }} /> : <p style={{ 'background-color': 'red', width: '100%', height: '100%' }} />)
        }
      );
      columnArray.push(
        {
          name: `${timeToUse}:30 ${dayPortion}`,
          selector: i + .5,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i + .5) ? <p style={{ 'background-color': 'green', width: '100%', height: '100%' }} /> : <p style={{ 'background-color': 'red', width: '100%', height: '100%' }} />)
        }
      );
    }
    return columnArray;
  }

  fakeData() {
    let fakeData = [];

    for(let i =0; i<10; i++) {
      fakeData.push(
        {
          id: i,
          roomNumber:`100${i}`,
          timesAvailable: i%2==0 ? [1,2,5,6,7,9,10] :[1,2.5,3,4.5,5,6.5,8]
        }
      );
    }
    return fakeData;
  }

  sortFunction(data,field,asc) {
    if (_.isNull(field)) {
      return data;
    }
    var dataAvailable = [],
        dataUnavaiable = [];
    _.forEach(data, (row)=>{
      if(row.timesAvailable.includes(field)){
        dataAvailable.push(row);
      }
      else {
        dataUnavaiable.push(row);
      }
    });
    var allData = [...dataAvailable,...dataUnavaiable];
    // console.log(allData);
    // console.log(allData.reverse())
    // allData = asc == "asc" ? allData : allData.reverse()
    console.log(allData);
    return allData;


  }

  changeFloor(newFloor) {
    const stateHolder = _.clone(this.state);
    stateHolder.floorSelected = newFloor;
    this.setState(stateHolder);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <>
        <FloorLevelButtons floors={this.state.floors} changeFloor={this.changeFloor} />
        <DataTable
          title={`${this.state.building} ${this.state.floors[this.state.floorSelected]} floor`}
          columns={this.state.columns}
          data={this.fakeData()}
          sortFunction={this.sortFunction}
        />
      </>
    );
  }
}

export default ReserveTable;
