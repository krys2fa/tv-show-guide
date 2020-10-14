import ShowActionTypes from '../types/showTypes';

const initialState = {
  shows: [],
  pending: false,
  error: null,
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShowActionTypes.FETCH_SHOWS_START:
      return {
        ...state,
        pending: true,
      };
    case ShowActionTypes.FETCH_SHOWS_FAILURE:
      return {
        ...state,
        pending: false,
        errorMessage: action.payload,
      };
    case ShowActionTypes.FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        pending: false,
        shows: action.payload,
      };
    default:
      return state;
  }
};

export default showReducer;
