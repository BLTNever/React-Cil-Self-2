
import { handleActions } from "redux-actions";

const initState = {
    show: true
}
// 定义reducer
const reducer = handleActions(
    {
        FOOTER_BAR_STATES: (state, action) => ({
            ...state,
            show: action.payload,
        })
    },
    {
        ...initState
    }
);
export default reducer;
