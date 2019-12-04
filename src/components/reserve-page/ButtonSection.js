import React from 'react';
import FloorLevelButtons from './FloorLevelButtons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './reserve-page.css';

class ButtonSection extends React.Component {
  render() {
    return (
      <div className="button-section">
        <FloorLevelButtons floors={this.props.floors} floorSelected={this.props.floorSelected} changeFloor={this.props.changeFloor}/>
        <Button className="float-right" variant="contained" onClick={() => this.props.toggleView()}>Toggle View</Button>
      </div>

    );
  }
}

export default ButtonSection;
