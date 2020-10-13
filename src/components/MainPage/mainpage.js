import React from 'react';
import Notifications from '../Notifications/Notifications';
import CardList from '../CardList/CardList';

const MainPage = () => (
  <div className="mainpage container">
    <div className="row">
      <div className="col s12 m6"><CardList /></div>
      <div className="col s12 m5 offset-m1"><Notifications /></div>
    </div>
  </div>
);

export default MainPage;
