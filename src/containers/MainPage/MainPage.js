/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/NavBar/NavBar';
import CardList from '../../components/CardList/CardList';

import { fetchShowsStartAsync } from '../../store/actions/showActions';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };

    this.showFilter = this.showFilter.bind(this);
  }

  componentDidMount() {
    const { fetchShows } = this.props;
    fetchShows();
  }

  showFilter(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { shows, error } = this.props;
    const fetchedShows = shows.shows;

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

    return (
      <div className="mainpage">
        <Navbar />
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
              id={categories}
              defaultValue="All"
            >
              {getCategories()}
            </select>
            <label htmlFor={categories}>Select Type of Show</label>
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
  error: PropTypes.string,
  shows: PropTypes.shape({
    shows: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    pending: PropTypes.bool,
  }).isRequired,
};

MainPage.defaultProps = {
  error: null,
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
