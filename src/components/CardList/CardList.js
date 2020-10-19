/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardList = ({ params }) => {
  // console.log('CardList -> params', params);
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
    // console.log('getShows -> result', result);
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

Card.propTypes = {
  fetchedShows: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
