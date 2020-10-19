import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CardDetails = props => {
  console.log('props', props);
  // const { id } = props.match.params;
  // const { shows } = props;
  const { match, shows } = props;
  const id = match.params;
  console.log('shows', shows);
  let singleShow = null;
  shows.map(show => {
    if (show.show.id === parseInt(id, 10)) {
      singleShow = show.show;
    }
    return true;
  });

  if (singleShow != null) {
    localStorage.clear();
    localStorage.setItem('singleShow', JSON.stringify(singleShow));
  }

  singleShow = JSON.parse(localStorage.getItem('singleShow'));

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span
            className="card-title"
            style={{ fontFamily: 'Dancing Script, cursive', color: '#000' }}
          >
            {singleShow.name}
          </span>
          <div className="card-image">
            <img
              src={singleShow.image && singleShow.image.medium ? singleShow.image.medium : ''}
              alt=""
            />
            <span className="card-title">{}</span>
          </div>
          <p
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            TYPE:
            {singleShow.type}
          </p>
          <p
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            STATUS:
            {singleShow.status}
          </p>
          <p
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            PREMIERED:
            {singleShow.premiered}
          </p>
          <p
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            SUMMARY:
            {singleShow.summary}
          </p>
          <p>
            <span style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}>
              RATING:
            </span>
            {singleShow.rating.average}
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div
            style={{ fontFamily: 'Questrial, sans-serif', marginRight: '20px', color: '#000' }}
          >
            SCHEDULE:
            {' '}
            {singleShow.schedule.time}
            {' '}
            {singleShow.schedule.days[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.shape({ id: PropTypes.string }),
    isExact: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  shows: state.shows.shows,
});

export default connect(mapStateToProps)(CardDetails);
