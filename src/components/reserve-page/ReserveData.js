import React from 'react';
import _ from 'lodash'


const ammenitiesToUse = ['Projector','White-Board [4\'x6\']', 'White-Board [4\'x15\']']
class ReserveData extends React.Component {
  createColumns() {
    const columnArray = [];

    let timeToUse,
      dayPortion;

    for (let i = 0; i < 24; i++) {
      timeToUse = i > 12 ? i - 12 : i;
      dayPortion = i >= 12 ? 'pm' : 'am';
      columnArray.push(
        {
          name: (i==0 ? '12:00' : `${timeToUse}:00`) + ' ' + `${dayPortion}`,
          selector: i,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i) ? 'available' : 'taken')
        }
      );
      columnArray.push(
        {
          name: (i==0 ? '12:30' : `${timeToUse}:30`) + ' ' + `${dayPortion}`,
          selector: i + 0.5,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i) ? 'available' : 'taken')
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
    var fakeDataHolder = {};
    for (let i = 0; i < loopQuantity; i++) {
      fakeDataHolder =
        {
          id: i,
          roomNumber: `100${i}`,
          timesAvailable: fakeDataArrays[Math.floor(Math.random() * 15)],
          ammenities:
              {
                seats: Math.floor(Math.random() * 10) + 1,
                ammenitiesList : []
              }
        }
        fakeDataHolder.ammenities.ammenitiesList.push("Desktop Comp.");
        _.forEach(ammenitiesToUse, (ammenity) => {
          if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
              fakeDataHolder.ammenities.ammenitiesList.push(ammenity);
            }
        });
        fakeData.push(_.clone(fakeDataHolder));
    }

    return fakeData;
  }
}

export default ReserveData;
