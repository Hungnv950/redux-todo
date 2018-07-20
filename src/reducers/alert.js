import * as types from '../contstants/ActionTypes'

const initialState = {
    openAlert: false,
    message: "",
    content: {
        taskName: "",
        time: {}
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_ALERT:
            return {
                ...state,
                openAlert: true,
                content: action.task,
                message: action.message
            };

        case types.CLOSE_ALERT:
            return {
                ...state,
                openAlert: false
            };

        default:
            return state;
    }
};

export default reducer;
