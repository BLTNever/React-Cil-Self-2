import React from "react";
import PropTypes from "prop-types";

// TODO: props为true 变成false 再变成true 不会重复渲染，使用缓存
// 现在只是隐藏，不是真正的lazyload
const lazyload = props =>
    props.loaded
        ? <div>
            {props.children}
        </div>
        : <div style={{ display: "none" }}>
            {props.children}
        </div>;

lazyload.defaultProps = {
    loaded: false
};
lazyload.propTypes = {
    children: PropTypes.any,
    loaded: PropTypes.any
};
export default lazyload;
