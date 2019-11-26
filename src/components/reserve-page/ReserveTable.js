import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './reserve-page.css';
import ReserveData from './ReserveData';

const styles = {
  table: {
    overflowX: 'scroll',
    overflowY: 'auto',
    'height': '90\%',
    'margin-right': '20px',
  },
};

class ReserveTable extends React.Component {
  render() {
    const { props } = this;
    const { classes } = props;

    return (
      <div className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Room Number</TableCell>
              {props.columns.map((col) => (
                <TableCell align="left" children={col.name} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="left">{data.roomNumber}</TableCell>
                {props.columns.map((col) => (
                  data.timesAvailable[col.selector].available
                    ? (
                      <TableCell
                        align="right"
                        className={`reserve-table-cell available ${data.timesAvailable[col.selector].selected ? 'selected' : ''}`}
                        onClick={data.timesAvailable[col.selector].selected ? () => props.deselectRoom(col, data) : () => props.setPickedRoom(col, data, 'Library')}
                      />
                    )
                    : (
                      <TableCell
                        align="right"
                        className="reserve-table-cell taken"
                      />
                    )))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ReserveTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReserveTable);
