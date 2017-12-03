import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       
        return (
            <div>
                <h2>{this.props.data}'s Child</h2>
            </div>
        );
    }
}
// 默认
Child.defaultProps = {};
// 验证
Child.propTypes = {
    data: PropTypes.string
};