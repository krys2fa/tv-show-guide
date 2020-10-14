import React from 'react';
import Card from '../Card/Card';

const CardList = ({ shows }) => (
  <div className="row">
    <div className="col s12 m7">
      {shows && shows[0].map(show => <Card key={show.show.id} show={show.show} />)}
    </div>
  </div>
);

export default CardList;
