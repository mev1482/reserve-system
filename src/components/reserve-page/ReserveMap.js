import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import FloorLevelButtons from './FloorLevelButtons';


class ReserveMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      building: 'Library', // to be taken in as a props attribute,
      floors: ['Ground', 'First', 'Second', 'Third', 'Fourth'], // to be taken in as props attribute
      floorSelected: 0,
      floorImages: ['bottom_floor_library', 'first_floor_library', 'second_floor_library', 'third_floor_library', 'fourth_floor_library'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFloor = this.changeFloor.bind(this);
  }

  changeFloor(newFloor) {
    const stateHolder = _.clone(this.state);
    stateHolder.floorSelected = newFloor;
    this.setState(stateHolder);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }


  render() {
    return (
      <div>
        <FloorLevelButtons floors={['Ground', 'First', 'Second', 'Third', 'Fourth']} changeFloor={this.changeFloor} />
        <img src={`./media/${this.state.floorImages[this.state.floorSelected]}.jpg`} alt="library" />
      </div>
    );
  }
}

export default ReserveMap;
