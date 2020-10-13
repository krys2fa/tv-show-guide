import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import CardDetails from './components/CardDetails/CardDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/show/:id" component={CardDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
