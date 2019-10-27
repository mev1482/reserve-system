import React from 'react';
import ReserveMap from './reserve-page/ReserveMap';
import ReserveTable from './reserve-page/ReserveTable';
import DateSelector from './reserve-page/DateSelector'
import RightSideBar from './reserve-page/RightSideBar'
import './Reserve.css'
import _ from 'lodash';

class Reserve extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    }

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    var stateHolder = _.clone(this.state);
    stateHolder.showMap = !stateHolder.showMap;
    this.setState(stateHolder);
  }
  render() {
    return (
    <div className="reserve-main">
        <div className="left-side-reserve">
          <DateSelector/>
          <DateSelector/>
        </div>
        <div className="middle-reserve">
          {_.get(this.state,'showMap',false) ? <ReserveMap/> : <ReserveTable numberRooms={10} showFloorButtons={true}/>}
        </div>
        <div className="right-side-reserve">
            <RightSideBar toggleView={this.toggleView}/>
        </div>
    </div>
  )

  }
}

export default Reserve;
