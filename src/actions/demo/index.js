
import { createAction } from "redux-actions";
import fetch from "../../utils/fetch.js";

export const getData = createAction("HOME_DATA");

export const fetchData = (params) => dispatch =>
    fetch(`xxxxx/xxxx/xxxx`, {
        body: params,
    }).then(res => {
        if (res.success) {
            dispatch(getData(res.result));
        }
        return res;
    });

