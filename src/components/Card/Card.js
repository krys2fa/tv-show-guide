import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ show }) => (
  <div className="col s12 m4">
    <div className="card">
      <div className="card-image">
        <img
          src={ show.image && show.image.medium ? show.image.medium : 'http://static.tvmaze.com/uploads/images/medium_portrait/203/509996.jpg' }
          alt=""
        />
      </div>
      <div className="card-content">
        <span
          className="card-title"
          style={{ fontFamily: 'Dancing Script, cursive', color: '#000' }}
        >
          {show.name}
        </span>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            TYPE:
          </span>
          {show.type}
        </p>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            STATUS:
          </span>
          {show.status}
        </p>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            PREMIERED:
          </span>
          {show.premiered}
        </p>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            RUNTIME:
          </span>
          {show.runtime}
        </p>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            RATING:
          </span>

          {show.rating.average}
        </p>
        <p>
          <span
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            SCHEDULE:
          </span>
          {show.schedule.days[0]}
          {' '}
          {show.schedule.time}
        </p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  show: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
