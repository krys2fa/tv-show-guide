import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
