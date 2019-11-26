import React from 'react';
import './Confirm.css';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classProps = this.props.location.state;
    return (
      <div className="Confirm">
      </div>
    );
  }
}
export default Confirm;
