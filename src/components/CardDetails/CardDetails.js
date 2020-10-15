import React from 'react';
import { connect } from 'react-redux';

const CardDetails = props => {
  // console.log('props', props);
  const { id } = props.match.params;
  // console.log('id from props', id);
  const { shows } = props;
  // console.log('shows from props', shows);
  let singleShow = null;
  shows.map(show => {
    // console.log('show', show.show.id);
    if (show.show.id === parseInt(id)) {
      // console.log('show.show', show.show);
      singleShow = show.show;
    }
  });
  // console.log('singleShow', singleShow);

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{singleShow.name}</span>
          {/* <p>Lorem Ipsum</p> */}
          <div className="card-image">
            <img
              src={singleShow.image && singleShow.image.medium ? singleShow.image.medium : ''}
              alt=""
            />
            <span className="card-title">{}</span>
          </div>
          <p>
            TYPE:
            {singleShow.type}
          </p>
          <p>
            STATUS:
            {singleShow.status}
          </p>
          <p>
            PREMIERED:
            {singleShow.premiered}
          </p>
          <p>
            SUMMARY:
            {singleShow.summary}
          </p>
          <p>
            UPDATED:
            {singleShow.updated}
          </p>
          <p>
            RATING:
            {singleShow.rating.average}
          </p>
          <p />
          <p />
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>
            SCHEDULE:
            {' '}
            {singleShow.schedule.time}
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
