/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardList = ({ fetchedShows }) => (
  <div className="row">
    <div className="col s12">
      {fetchedShows && fetchedShows.map(show => (
        <Link
          key={show.show.id}
          to={`/show/${show.show.id}`}
          show={show.show}
        >
          <Card key={show.show.id} show={show.show} />
        </Link>
      ))}
    </div>
  </div>
);

Card.propTypes = {
  fetchedShows: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
