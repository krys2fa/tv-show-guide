/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notifications from '../Notifications/Notifications';
import CardList from '../../components/CardList/CardList';
import { fetchShowsStartAsync } from '../../store/actions/showActions';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchShows } = this.props;
    fetchShows();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { shows, error, pending } = this.props;
    const fetchedShows = shows.shows;

    if (!this.shouldComponentRender()) return <LoadingSpinner />;

    return (
      <div className="mainpage">
        <div className="row">
          {error && <span className="show-list-error">{error}</span>}
          <CardList fetchedShows={fetchedShows} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  pending: state.pending,
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchShows: fetchShowsStartAsync,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
