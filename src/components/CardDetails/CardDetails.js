import React from 'react';
import { connect } from 'react-redux';

const CardDetails = props => {
  const { id } = props.match.params;
  const { shows } = props;
  let singleShow = null;
  shows.map(show => {
    if (show.show.id === parseInt(id)) {
      singleShow = show.show;
    }
  });

  return (
		<div className="container section">
			<div className="card z-depth-0">
				<div className="card-content">
					<span
						className="card-title"
						style={{ fontFamily: 'Dancing Script, cursive', color: '#000' }}>
						{singleShow.name}
					</span>
					<div className="card-image">
						<img
							src={
								singleShow.image && singleShow.image.medium
									? singleShow.image.medium
									: ''
							}
							alt=""
						/>
						<span className="card-title">{}</span>
					</div>
					<p
						style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						TYPE:
						{singleShow.type}
					</p>
					<p
						style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						STATUS:
						{singleShow.status}
					</p>
					<p
						style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						PREMIERED:
						{singleShow.premiered}
					</p>
					<p
						style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						SUMMARY:
						{singleShow.summary}
					</p>
					<p>
						<span style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						RATING: </span>
						{singleShow.rating.average}
					</p>
				</div>

				<div className="card-action grey lighten-4 grey-text">
					<div
						style={{
							fontFamily: 'Questrial, sans-serif',
							marginRight: '20px',
							color: '#000',
						}}>
						SCHEDULE: {singleShow.schedule.time}
            {' '}
						{singleShow.schedule.days[0]}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    shows: state.shows.shows,
  };
};

export default connect(mapStateToProps)(CardDetails);
