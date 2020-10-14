/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
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

    if (!this.shouldComponentRender()) {
      return (
        <div
          style={{
            width: '100%',
            height: '100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
      );
    }

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
