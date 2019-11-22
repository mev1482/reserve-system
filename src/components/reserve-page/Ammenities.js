import React from 'react';
import _ from 'lodash';
import "react-datepicker/dist/react-datepicker.css"

class Ammenities extends React.Component {

    render(){
      var ammenities = _.get(this.props.displayInformation.selectedRoom,'ammenities',null);
      return (
        <div className="date-picker">
            <h2>Ammenities</h2>
            {this.props.displayInformation.roomSelected ?
              <ul>
                  <li>Seats: {ammenities.seats}</li>
                  <h4> Includes: </h4>
                  {ammenities.ammenitiesList.map((ammenity) => (
                    <li className="ammenity">{ammenity}</li>
                  ))}
              </ul> :
              <p>No Room Selected</p>
            }
        </div>
      )
    }
}

export default Ammenities;
