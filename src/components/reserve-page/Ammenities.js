import React from 'react';
import _ from 'lodash';
import './reserve-page.css'

class Ammenities extends React.Component {
  render() {
    const ammenities = _.get(this.props.displayInformation.selectedRoom, 'ammenities', null);
    return (
      <div className="ammenities-component">
        <h2 className="black-header">Ammenities</h2>
        <div className="center-text-holder">
          {this.props.displayInformation.roomSelected
            ? (
              <ul className="ammenities-list">
                <li>
                Seats:
                   {" " + ammenities.seats}
                </li>
                <h4> Includes: </h4>
                {ammenities.ammenitiesList.map((ammenity) => (
                  <li>{ammenity}</li>
                ))}
              </ul>
            )
            : <h3>No Room Selected</h3>}
          </div>
      </div>
    );
  }
}

export default Ammenities;
