/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import CardList from '../../components/CardList/CardList';

import { fetchShowsStartAsync } from '../../store/actions/showActions';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };

    this.showFilter = this.showFilter.bind(this);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchShows } = this.props;
    fetchShows();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  showFilter(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { shows, error } = this.props;
    const fetchedShows = shows.shows;
    console.log('MainPage -> render -> fetchedShows', fetchedShows);

    const categories = [
      'All',
      'Documentary',
      'Reality',
      'Scripted',
      'Talk Show',
    ];

    const getCategories = () => {
      const result = [];
      for (let i = 0; i < categories.length; i += 1) {
        result.push(
          <option key={categories[i]} value={categories[i]}>
            {categories[i]}
          </option>,
        );
      }
      return result;
    };

    const { filter } = this.state;
    const params = {
      fetchedShows,
      filter,
    };
    console.log('MainPage -> render -> params', params);

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
          <div className="input-field col s12">
            <select
              style={{
                marginTop: '25px',
                width: '70vw',
                height: '200px',
                borderWidth: '1px',
                fontSize: '25px',
                marginBottom: '25px',
              }}
              onChange={this.showFilter}
              name="categories"
              id="categories"
              defaultValue="All"
            >
              {getCategories()}
            </select>
            <label> Select Type of Show</label>
          </div>

          {error && <span className="show-list-error">{error}</span>}
          <CardList params={params} />
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  shows: PropTypes.object.isRequired,
};

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
