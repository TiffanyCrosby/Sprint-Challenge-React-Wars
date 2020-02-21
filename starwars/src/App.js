import React from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character />
    </div>
  )
}

export default App;
