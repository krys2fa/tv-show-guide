import ShowActionTypes from '../types/showTypes';

export const fetchShowsSuccess = shows => ({
  type: ShowActionTypes.FETCH_SHOWS_SUCCESS,
  payload: shows,
});

export const fetchShowsStart = () => ({
  type: ShowActionTypes.FETCH_SHOWS_START,
});

export const fetchShowsFailure = error => ({
  type: ShowActionTypes.FETCH_SHOWS_FAILURE,
  payload: error,
});

export const fetchShowsStartAsync = () => dispatch => {
  const apiUrl = 'http://api.tvmaze.com/schedule?country=US&date=2014-12-01';
  dispatch(fetchShowsStart());
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchShowsSuccess(data));
      return data;
    })
    .catch(error => {
      dispatch(fetchShowsFailure(error));
    });
};
