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
  dispatch(fetchShowsStart());
  fetch('http://api.tvmaze.com/search/shows?q=girls')
    .then(res => res.json())
    .then(data => {
      // console.log('action', data);
      dispatch(fetchShowsSuccess(data));
      console.log('dispatch(fetchShowsSuccess(data))', dispatch(fetchShowsSuccess(data)));
      return data;
    })
    .catch(error => {
      dispatch(fetchShowsFailure(error));
    });
};
