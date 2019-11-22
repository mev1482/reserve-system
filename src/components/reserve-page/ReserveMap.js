import React from 'react';
import _ from 'lodash';
import FloorLevelButtons from './FloorLevelButtons';
import ReserveTable from './ReserveTable';
import './reserve-page.css'


class ReserveMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      building: 'Library', // to be taken in as a props attribute,
      // to be taken in as props attribute
      floors: ['Ground', 'First', 'Second', 'Third', 'Fourth'],
      floorSelected: 0,
      floorImages: ['bottom_floor_library', 'first_floor_library',
        'second_floor_library', 'third_floor_library', 'fourth_floor_library'],
      roomTimeSelected: false,
    };

    this.changeFloor = this.changeFloor.bind(this);
  }

  changeFloor(newFloor) {
    if (newFloor !== _.get(this.state, 'floorSelected')) {
      const stateHolder = _.clone(this.state);
      stateHolder.roomTimeSelected = false;
      stateHolder.floorSelected = newFloor;
      this.setState(stateHolder);
    }
  }

  showRoomTime() {
    const stateHolder = _.clone(this.state);
    stateHolder.roomTimeSelected = true;
    this.setState(stateHolder);
  }

  render() {
    const imageArray = _.get(this.state, 'floorImages');
    const selectedFloor = _.get(this.state, 'floorSelected');
    const roomTimeSelected = _.get(this.state, 'roomTimeSelected', false);
    return (
      <div classname="image-holder">
      <div>
        <FloorLevelButtons
          floors={['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor',
            'Fourth Floor']}
          changeFloor={this.changeFloor}
        />
      </div>
      <div>
        <img
          className="image"
          src={`./media/${imageArray[selectedFloor]}.jpg`}
          onClick={() => this.showRoomTime()}
          alt="library"
        />
        {roomTimeSelected ?
          <ReserveTable
              floors={[]}
              columns={this.props.columns}
              data={this.props.data}
              setPickedRoom={this.props.setPickedRoom}
              deselectRoom={this.props.deselectRoom}
              numberRooms={1}
              /> : <></>}
      </div>
      </div>
    );
  }
}

export default ReserveMap;
