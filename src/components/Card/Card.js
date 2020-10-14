import React from 'react';

const Card = ({ show }) => {
  console.log(show);
  return (
		// <div className="row">
		  <div className="col s12 m4">
		<div className="card">
			<div className="card-image">
				<img
					src={show.image && show.image.medium ? show.image.medium : ''}
					alt=""
				/>
			</div>
			<div className="card-content">
				<span className="card-title">{show.name}</span>
				<p>{show.type}</p>
				<p>{show.status}</p>
				<p>{show.premiered}</p>
				{/* <p>{show.summary}</p> */}
				<p>{show.updated}</p>
				<p>{show.rating.average}</p>
				<p>{show.schedule.time}</p>
				<p>{show.schedule.days[0]}</p>
				{/* <p>{show.url}</p> */}
				{/* <p>
					{show.image && show.image.medium ? show.image.medium : 'testing'}
				</p> */}
			</div>
			<div className="card-action">
				<a href="#">This is a link</a>
			</div>
		</div>
		  </div>
		// </div>
	);
};

export default Card;
