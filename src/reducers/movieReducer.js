const initState = null;

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_MOVIE":
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};

export default movieReducer;
