import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Filter = ({ params }) => {
  const getShows = () => {
    const result = [];
    if (params.filter === 'All') {
      params.fetchedShows.map(show => result.push(
        <Link
          key={show.show.id}
          to={`/show/${show.show.id}`}
          show={show.show}
        >
          <Card key={show.show.id} show={show.show} />
        </Link>,
      ));
    } else {
      params.fetchedShows
        .filter(show => show.show.type === params.filter)
        .map(show => result.push(
          <Link
            key={show.show.id}
            to={`/show/${show.show.id}`}
            show={show.show}
          >
            <Card key={show.show.id} show={show.show} />
          </Link>,
        ));
    }
    return result;
  };

  return (
    <div className="row">
      <div className="col s12">
        {getShows()}
      </div>
    </div>
  );
};

Filter.propTypes = {
  fetchedShows: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.shape({
    fetchedShows: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
  }),
};

Filter.defaultProps = {
  fetchedShows: [],
  params: {},
};

export default Filter;
