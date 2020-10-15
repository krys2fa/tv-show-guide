import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ show }) => (
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
				<span className="card-title">{show.id}</span>
				<p>
					TYPE:
					{show.type}
				</p>
				<p>
					STATUS:
					{show.status}
				</p>
				<p>
					PREMIERED:
					{show.premiered}
				</p>
				<p>
					UPDATED:
					{show.updated}
				</p>
				<p>
					RATING:
					{show.rating.average}
				</p>
				<p>
					SCHEDULE: {show.schedule.days[0]} {show.schedule.time}
				</p>
			</div>
		</div>
	</div>
);

Card.propTypes = {
  show: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
