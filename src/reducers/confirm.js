import * as types from '../contstants/ActionTypes'

const initialState = {
    openConfirm: false,
    confirm: "",
    message: "",
    content: {
        taskName: "",
        time: {}
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_CONFIRM:
            // console.log(action);
            return {
                ...state,
                openConfirm: true,
                content: action.task,
                confirm: action.confirm,
                message: action.message
            };

        case types.CLOSE_CONFIRM:
            return {
                ...state,
                openConfirm: false
            };

        default:
            return state;
    }
};

export default reducer;
