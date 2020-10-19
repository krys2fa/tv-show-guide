import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import CardDetails from './components/CardDetails/CardDetails';

const App = () => (
  <div className="">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/show/:id" component={CardDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
