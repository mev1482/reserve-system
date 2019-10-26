import React from 'react';


class ReserveData extends React.Component {
  createColumns() {
    const columnArray = [];
    columnArray.push(
      {
        name: 'Room Number',
        selector: 'roomNumber',
        sortable: true,
      }
    );

    let timeToUse,
      dayPortion;

    for (let i = 2; i < 10; i++) {
      timeToUse = i > 12 ? i - 12 : i;
      dayPortion = i >= 12 ? 'pm' : 'am';
      columnArray.push(
        {
          name: `${timeToUse}:00 ${dayPortion}`,
          selector: i,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i) ? <p style={{ backgroundColor: 'green', width: '100%', height: '100%' }} /> : <p style={{ backgroundColor: 'red', width: '100%', height: '100%' }} />),
        }
      );
      columnArray.push(
        {
          name: `${timeToUse}:30 ${dayPortion}`,
          selector: i + 0.5,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i + 0.5) ? <p style={{ backgroundColor: 'green', width: '100%', height: '100%' }} /> : <p style={{ backgroundColor: 'red', width: '100%', height: '100%' }} />),
        }
      );
    }
    return columnArray;
  }

  fakeData(floorNumber, loopQuantity) {
    const fakeDataArrays = [
      [1, 1.5, 2, 3.5, 5, 5.5, 10],
      [2, 2.5, 4, 4.5, 5, 8, 5, 9, 10],
      [1, 2.5, 3, 3.5, 7, 7.5, 9],
      [5, 5.5, 6, 9, 10],
      [1, 2, 5, 6, 7, 9, 10],
      [1, 2.5, 8, 8.5, 9],
      [1.5, 2, 6.5, 7, 7.5, 9.5],
      [1, 2.5, 3, 3.5, 8.5, 9, 10],
      [1, 2.5, 3, 3.5, 7, 7.5, 9],
      [5, 5.5, 6, 9, 10],
      [1, 2.5, 3, 3.5, 7, 7.5, 9],
      [1, 2, 5, 6, 7, 9, 10],
      [1, 2.5, 3, 3.5, 8.5, 9, 10],
      [1, 1.5, 2, 3.5, 5, 5.5, 10],
      [5, 5.5, 6, 9, 10],
    ];
    const fakeData = [];
    for (let i = 0; i < loopQuantity; i++) {
      fakeData.push(
        {
          id: i,
          roomNumber: `100${i}`,
          timesAvailable: fakeDataArrays[Math.floor(Math.random() * 15)],
        }
      );
    }

    return fakeData;
  }
}

export default ReserveData;
