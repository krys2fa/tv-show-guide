import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';

class CardDetails extends React.Component {
  constructor(props) {
    super(props);

    const { match, shows } = this.props;
    const id = match.params;
    const singleShow = shows && shows.filter(
      show => show.show.id === parseInt(id.id, 10),
    )[0].show;
    this.state = { show: singleShow };
  }

  render() {
    const { show } = this.state;
    return (
      <div className="container section">
        <NavBar />
        <div className="card z-depth-0">
          <div className="card-content">
            <span
              className="card-title"
              style={{
                fontFamily: 'Dancing Script, cursive',
                color: '#000',
                textAlign: 'center',
              }}
            >
              {show && show.name}
            </span>
            <div style={{ textAlign: 'center' }}>
              <img
                src={show && show.image.medium ? show.image.medium : ''}
                alt=""
              />
              <span className="card-title">{}</span>
            </div>
            <p
              style={{
                fontFamily: 'Questrial, sans-serif',
                marginRight: '20px',
                color: '#000',
              }}
            >
              TYPE:
              {show && show.type}
            </p>
            <p
              style={{
                fontFamily: 'Questrial, sans-serif',
                marginRight: '20px',
                color: '#000',
              }}
            >
              STATUS:
              {show && show.status}
            </p>
            <p
              style={{
                fontFamily: 'Questrial, sans-serif',
                marginRight: '20px',
                color: '#000',
              }}
            >
              PREMIERED:
              {show && show.premiered}
            </p>
            <p
              style={{
                fontFamily: 'Questrial, sans-serif',
                marginRight: '20px',
                color: '#000',
              }}
            >
              SUMMARY:
              {show && show.summary}
            </p>
            <p>
              <span
                style={{
                  fontFamily: 'Questrial, sans-serif',
                  marginRight: '20px',
                  color: '#000',
                }}
              >
                RATING:
              </span>
              {show && show.rating.average}
            </p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div
              style={{
                fontFamily: 'Questrial, sans-serif',
                marginRight: '20px',
                color: '#000',
              }}
            >
              SCHEDULE:
              {' '}
              {show && show.schedule.time}
              {' '}
              {show && show.schedule.days[0]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
