import React from 'react';
import FloorLevelButtons from './FloorLevelButtons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './reserve-page.css';

class ButtonSection extends React.Component {
  render() {
    return (
      <div className="button-section">
        <FloorLevelButtons floors={this.props.floors}/>
        <Button className="float-right" variant="contained">Toggle View</Button> 
      </div>

    );
  }
}

export default ButtonSection;
