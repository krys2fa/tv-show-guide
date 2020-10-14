import React from 'react';

const CardDetails = props => {
  // console.log(props);
  const { id, name } = props.match.params;
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Show Title -
            {id}
          </span>
          <p>Lorem Ipsum</p>
          <div className="card-image">
            <img
              src="http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
              alt=""
            />
            <span className="card-title">{name}</span>
          </div>
          {/* <p>{show.type}</p>
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
					</p> */}
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
