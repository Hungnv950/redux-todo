import * as types from '../contstants/ActionTypes'

var initialState = {
  openFormTask: false,
};

var reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL_FORM_TASK:
      return {
        ...state,
        openFormTask: true
      };

    case types.CLOSE_MODAL_FORM_TASK:
      return {
        ...state,
        openFormTask: false
      };

    default:
      return state;
  }
}

export default reducer;
