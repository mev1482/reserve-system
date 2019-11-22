import React from 'react';
import _ from 'lodash';
import DataTable from 'react-data-table-component';
import FloorLevelButtons from './FloorLevelButtons';
import ReserveData from './ReserveData';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./reserve-page.css"

const styles = {
  table: {
    overflowX: 'scroll',
    overflowY: 'scroll',
    'margin-right': '20px'
  }
};

class ReserveTable extends React.Component {
  constructor(props) {
    super(props);
    const reserveData = new ReserveData();
    const timeColumns = reserveData.createColumns();
    const fakeData = reserveData.fakeData(0, props.numberRooms);
    this.state = {
      building: 'Library', // to be taken in as a props attribute,
      floors: ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor', 'Fourth Floor'], // to be taken in as props attribute
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

  deSelect = () => {
    this.props.deSelectRoom();
  }

  changeFloor(newFloor) {
    const stateHolder = _.clone(this.state);
    stateHolder.floorSelected = newFloor;
    this.setState(stateHolder);
    this.updateData();
  }

  updateData() {
    const stateHolder = _.clone(this.state);
    stateHolder.data = this.state.reserveData.fakeData(this.state.floorSelected, this.state.numberRooms);
    this.setState(stateHolder);
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.table}>
        {_.get(this.props, 'showFloorButtons', false) ? <FloorLevelButtons floors={this.state.floors} changeFloor={this.changeFloor} floorSelected={this.state.floorSelected} /> : <></>}
        <Table>
          <TableHead>
            <TableRow>
            {this.state.columns.map((col) => (
              <TableCell align="left" children={col.name}></TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((fakeTime) => (
              <TableRow key={fakeTime.id}>
              <TableCell align="left">{fakeTime.roomNumber}</TableCell>
                {this.state.columns.map((col) => (
                  <TableCell
                      align="right"
                      className={"reserve-table-cell " + col.cell(fakeTime)}
                      onClick={col.cell(fakeTime) === 'available' ? () => this.props.setPickedRoom(col,fakeTime,"Library") : ''}>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ReserveTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReserveTable);
