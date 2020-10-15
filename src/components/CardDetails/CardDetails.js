import React from 'react';
import { connect } from 'react-redux';

const CardDetails = props => {
console.log('props', props);
  const { id } = props.match.params;
  console.log('id from props', id);
  const { shows } = props;
  const currentShow = shows.shows;
  currentShow.map(show => {
    if (show.id == parseInt(id)) {
    console.log('thisShowing sfsdfsfsdfdsfsdfsdfs', show);
    }
    // console.log('thisShow2', show);
    console.log('id type',typeof parseInt(id));
    console.log('show id type', typeof show.id);
  });

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Show Title -
            {/* {id} */}
          </span>
          <p>Lorem Ipsum</p>
          <div className="card-image">
            <img
              src="http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
              alt=""
            />
            <span className="card-title">{}</span>
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


const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	return {
		shows: state.shows,
	};
};

export default connect(mapStateToProps)(CardDetails);
