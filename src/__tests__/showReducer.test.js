import showReducer from '../store/reducers/showReducer';
import ShowActionTypes from '../store/types/showTypes';

describe('shows reducer', () => {
  it('should return the initial state', () => {
    expect(showReducer(undefined, {})).toEqual({
      shows: [],
      pending: false,
      error: null,
    });
  });

  it('should handle FETCH_SHOWS_START', () => {
    expect(
      showReducer([], {
        type: ShowActionTypes.FETCH_SHOWS_START,
      }),
    ).toEqual({
      pending: true,
    });
  });

  it('should handle FETCH_SHOWS_SUCCESS', () => {
    expect(
      showReducer([], {
        type: ShowActionTypes.FETCH_SHOWS_SUCCESS,
      }),
    ).toEqual({
      pending: false,
    });
  });

  it('should handle FETCH_SHOWS_FAILURE', () => {
    expect(
      showReducer([], {
        type: ShowActionTypes.FETCH_SHOWS_FAILURE,
      }),
    ).toEqual({
      pending: false,
    });
  });
});
