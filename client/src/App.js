import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PlayerList />
    </div>
  );
}

export default App;
