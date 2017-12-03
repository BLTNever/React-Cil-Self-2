
import { createAction } from "redux-actions";
export const getFooterBarStatus = createAction("FOOTER_BAR_STATES");

//控制底部菜单栏显示或者不显示
export const showOrHideFooterBar = (params) => dispatch => {
    dispatch(getFooterBarStatus(params))
}