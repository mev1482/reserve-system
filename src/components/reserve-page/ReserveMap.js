import React from 'react';
import _ from 'lodash';
import ReserveTable from './ReserveTable';
import './reserve-page.css';


class ReserveMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const imageArray = _.get(this.props, 'floorImages');
    const selectedFloor = _.get(this.props, 'floorSelected');
    const roomTimeSelected = _.get(this.state, 'roomTimeSelected', false);
    console.log(imageArray);

    return (
      <div>
          <img
            className="image"
            src={`./media/${imageArray[selectedFloor]}`}
            onClick={() => this.showRoomTime()}
            alt="library"
          />
        <div>
          {roomTimeSelected
            ? (
              <ReserveTable
                floors={[]}
                columns={this.props.columns}
                data={this.props.data}
                setPickedRoom={this.props.setPickedRoom}
                deselectRoom={this.props.deselectRoom}
              />
            ) : <></>}
        </div>
      </div>
    );
  }
}

export default ReserveMap;
