import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
