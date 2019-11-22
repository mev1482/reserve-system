import React from 'react';
import _ from 'lodash';
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


  render() {
    const props = this.props;
    const classes = props.classes;
    console.log(this.props);

    return (
      <div className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell align="left">Room Number</TableCell>
            {props.columns.map((col) => (
              <TableCell align="left" children={col.name}></TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((data) => (
              <TableRow key={data.id}>
              <TableCell align="left">{data.roomNumber}</TableCell>
                {props.columns.map((col) => {
                  return (
                      data.timesAvailable[col.selector].available ?
                      <TableCell
                        align="right"
                        className={"reserve-table-cell available " + (data.timesAvailable[col.selector].selected ? "selected" : '')}
                        onClick={data.timesAvailable[col.selector].selected ? () => props.deselectRoom(col,data) : () => props.setPickedRoom(col,data,"Library")}>
                      </TableCell> :
                      <TableCell
                        align="right"
                        className="reserve-table-cell taken">
                      </TableCell> )
                })}
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
