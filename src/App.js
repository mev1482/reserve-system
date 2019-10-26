import React from 'react';
import './App.css';
import ReserveMap from './components/reserve-page/ReserveMap';
import ReserveTable from './components/reserve-page/ReserveTable';

function App() {
  return (
    <>
      {true ? <ReserveMap /> : <ReserveTable numberRooms={10} />}
    </>
  );
}

export default App;
