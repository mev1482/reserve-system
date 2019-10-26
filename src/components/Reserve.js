import React from 'react';
import './App.css';
import ReserveMap from './reserve-page/ReserveMap';
import ReserveTable from './reserve-page/ReserveTable';
import DateSelector from './reserve-page/DateSelector'
import RightSideBar from './reserve-page/RightSideBar'

class Reserve extends React.Component {
  render() {
    return (
    <div className="reserve-main">
        <div className="left-side-reserve">
          <DateSelector/>
          <DateSelector/>
        </div>
        <div className="middle-reserve">
          <ReserveTable numberRooms={10} showFloorButtons={true}/>
        </div>
        <div className="right-side-reserve">
            <RightSideBar/>
        </div>
    </div>
  )

  }
}

export default Reserve;
