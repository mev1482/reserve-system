import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Reservations({ reservations }) {
  return (
    <div className="table-container">
      <h2>Current Reservations</h2>
      <Table className="reservations-table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Times</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((res) => (
            <TableRow key={res.building + res.room + res.time}>
              <TableCell component="th" scope="row">{res.date}</TableCell>
              <TableCell>{res.building}</TableCell>
              <TableCell align="right">{res.room}</TableCell>
              <TableCell align="right">
                {`${res.time} - ${res.endTime}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
