export const getShow = (show) => {
  return (dispatch, getState) => {
  // make async call
    dispatch({type: 'GET_SHOW', show });
  };
}
