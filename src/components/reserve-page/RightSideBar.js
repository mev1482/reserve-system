import React from 'react';
import { Link } from 'react-router-dom';

class RightSideBar extends React.Component {
  render() {
    return (
      <div className="right-side-bar">
        <button onClick={this.props.toggleView}>Toggle</button>
        <Link
          className="confirmLink"
          to={{
            pathname: '/confirm',
            state: { reservationInformation: this.props.reservationInfo },
          }}
        >
          <button className="submit-button">Submit</button>
        </Link>
      </div>
    );
  }
}

export default RightSideBar;
