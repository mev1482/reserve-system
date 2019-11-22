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
          cell: (row) => (row.timesAvailable.includes(i) ? true : false)
        }
      );
      columnArray.push(
        {
          name: (i==0 ? '12:30' : `${timeToUse}:30`) + ' ' + `${dayPortion}`,
          selector: i + 0.5,
          sortable: true,
          cell: (row) => (row.timesAvailable.includes(i) ? true : false)
        }
      );
    }
    return columnArray;
  }

  roomAvailability() {
    var fakeRoomAvailabilites = {};
    for(var i = 0;i<24;i=i+.5){
      var name =
      {
        selected: false,
        available: (Math.floor(Math.random() * 10) + 1) % 2 === 0
      }
      fakeRoomAvailabilites[i] = name;
    }
    return fakeRoomAvailabilites
  }

  fakeData(floorNumber, loopQuantity) {
    const fakeData = [];
    var fakeDataHolder = {};
    for (let i = 0; i < loopQuantity; i++) {

      var roomAvailability = this.roomAvailability();

      fakeDataHolder =
        {
          id: i,
          roomNumber: `100${i}`,
          timesAvailable: roomAvailability,
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
