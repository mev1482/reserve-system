import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Events({ events }) {
  return (
    <div className="table-container">
      <h2>Upcoming Events</h2>
      <Table className="events-table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Times</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((evt) => (
            <TableRow key={evt.event}>
              <TableCell component="th" scope="row">{evt.date}</TableCell>
              <TableCell>{evt.event}</TableCell>
              <TableCell>{evt.location}</TableCell>
              <TableCell align="right">
                {`${evt.time} - ${evt.endTime}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
