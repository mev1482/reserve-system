import React from 'react';
import Header from './components/shared/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        account={{ first: "Mike", last: "K" }}
      />
    </div>
  );
}

export default App;
