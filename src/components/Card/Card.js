import React from 'react';

const Card = ({ show }) => {
  console.log(show);
  return (
    // <div className="row">
    //   <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={show.image && show.image.original ? show.image.original : ''} alt="" />
            <span className="card-title">title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>{show.type}</p>
            <p>{show.status}</p>
            <p>{show.premiered}</p>
            <p>{show.summary}</p>
            <p>{show.updated}</p>
            <p>{show.rating.average}</p>
            <p>{show.schedule.time}</p>
            <p>{show.schedule.days[0]}</p>
            <p>{show.url}</p>
            <p>
              {show.image && show.image.original
							  ? show.image.original
							  : 'testing'}
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Card;
