import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DataTable from 'react-data-table-component';
import FloorLevelButtons from './FloorLevelButtons'

class ReserveTable extends React.Component {
  constructor(props) {
    super(props);
    let timeColumns = this.createColumns();
    let fakeData = this.fakeData();
    this.state = {
      building: "Library", // to be taken in as a props attribute,
      floors:["Ground","First","Second","Third","Fourth"], // to be taken in as props attribute
      floorSelected: 0,
      columns: timeColumns,
      data: fakeData
    };

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFloor = this.changeFloor.bind(this);
  }

  createColumns() {
    let columnArray = [];
    columnArray.push(
      {
        name: "Room Number",
        selector: "roomNumber",
        sortable: true
      }
    );

    for(let i = 1; i<=12;i++) {
      columnArray.push(
        {
          name: i + ":00 am",
          selector: i + "00am",
          sortable: true,
          cell: (row) => row.available ? <p style={{"background-color":'green',"width":'100%', 'height':'100%'}}></p> : <p style={{"background-color":'red', "width":'100%', 'height':'100%'}}></p>
        });
      columnArray.push(
          {
            name: i + ":30 am",
            selector: i + "30am",
            sortable: true,
            cell: (row) => row.available ? <p style={{"background-color":'green',"width":'100%', 'height':'100%'}}></p> : <p style={{"background-color":'red', "width":'100%', 'height':'100%'}}></p>
          });
    }
    return columnArray;
  }

  fakeData() {


    return [{ id: 1, roomNumber: "1119", title: 'Conan the Barbarian', year: '1982' }];



  }

  changeFloor(newFloor) {
    let stateHolder = _.clone(this.state);
    stateHolder.floorSelected = newFloor;
    this.setState(stateHolder);
  }

  handleChange(event) {
    return;
  }

  handleSubmit(event) {
    return;
  }

  render() {

    return (
      <>
      <FloorLevelButtons floors={this.state.floors}  changeFloor={this.changeFloor}/>
      <DataTable
        title={this.state.building + " " + this.state.floors[this.state.floorSelected] + " floor"}
        columns={this.state.columns}
        data={this.state.data}>
      </DataTable>
      </>
    );
  }
}

export default ReserveTable;
