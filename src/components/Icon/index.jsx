
import React from "react";
import PropTypes from "prop-types";
import "./icon.less";

/**
 * 图标组件，使用css实现，而不是svg
 */

const Icon = ({ type, style }) => {
    const className = "anticon anticon-" + type;
    return <i className={className} style={style} />;
};
Icon.defaultProps = {
    type: ""
};
Icon.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object
};
module.exports = Icon;
