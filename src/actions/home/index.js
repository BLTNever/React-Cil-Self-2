//基础 、零散的reducer
import { createAction } from "redux-actions";
export const getHome = createAction("HOME");

export const fetchHome = (params) => dispatch => {
    dispatch(getHome(params))
}