
import { handleActions } from "redux-actions";

// 定义reducer
const reducer = handleActions(
    {
        HOME_DATA: (state, action) => ({
            ...state,
            HOME: action.payload,
        })
    },
    {}
);
export default reducer;
