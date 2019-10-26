import React from 'react';
import './App.css';
import ReserveMap from './components/reserve-page/ReserveMap';
import ReserveTable from './components/reserve-page/ReserveTable';
import DateSelector from './components/reserve-page/DateSelector'

function App() {
  return (
    <>
      {false ? <DateSelector /> : <ReserveTable numberRooms={10} showFloorButtons={true} />}
    </>
  );
}

export default App;
