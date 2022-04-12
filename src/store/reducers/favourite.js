const initial_state = {
  current_state: false,
  available_states: [true, false],
};
function favourite_reducer(state = initial_state, action) {
  switch (action.type) {
    case "set_favourite":
      return { ...state, current_state: action.payload };
    default:
      return state;
  }
}
export default favourite_reducer;
