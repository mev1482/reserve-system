import React from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
