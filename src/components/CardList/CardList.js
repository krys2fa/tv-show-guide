import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const CardList = ({ shows }) => (
  <div className="row">
    <div className="col s12">
      {console.log('showsings', shows.shows)}
      {shows.shows && shows.shows.map(show => (
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

export default CardList;
