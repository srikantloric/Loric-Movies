const initState = null;

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_HOME":
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};

export default homeReducer;
