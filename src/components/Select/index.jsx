
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List } from "antd-mobile";
import PropTypes from "prop-types";
import autobind from "autobind-decorator";
// actions

/**
 * @class  Select组件
 */

// 将store注入组件的props
const mapStateToProps = state => ({});
// 将action与dispatch进行绑定并注入组件的props
const mapDispatchToProps = dispatch => ({
    //区分绑定到props的action与传递的props
    actions: bindActionCreators(
        {
            dispatch,
        },
        dispatch
    )
});
@connect(mapStateToProps, mapDispatchToProps)
class Select extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        options: [],

        onChange: () => null
    };
    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.number
        ]),
        options: PropTypes.array.isRequired,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        actions: PropTypes.shape({
            dispatch: PropTypes.func.isRequired,
        }),
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.array,
            PropTypes.string
        ])
    };

    getLabel(options, value) {
        // fix fuck Android JSAPI BUG
        const match = options.filter(
            option => String(option.value) === String(value)
        );
        return match[0] && match[0].label;
    }
    @autobind
    handleOnChange(value) {

        const id = this.props.id;

    }

    render() {
        const { value, options, placeholder } = this.props;

        return (
            <List.Item
                onClick={this.handleOnChange.bind(null, value)}
                arrow="horizontal"
                extra={this.getLabel(options, value) || placeholder || "请选择"}
            >
                {this.props.children}
            </List.Item>
        );
    }
}

export default Select;
