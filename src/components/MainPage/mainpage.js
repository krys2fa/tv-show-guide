import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import CardList from '../CardList/CardList';

class MainPage extends Component {
  render() {
    const { shows } = this.props;
    return (
      <div className="mainpage container">
        <div className="row">
          <div className="col s12 m6"><CardList shows={shows}/></div>
          <div className="col s12 m5 offset-m1"><Notifications /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows.shows,
});

export default connect(mapStateToProps)(MainPage);
