
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import autobind from "autobind-decorator";
import { browserHistory } from 'react-router'


// components

// submodule
import "./index.less";

// modules
import Child from './child'

// utils

// actions

// 将store注入组件的props
const mapStateToProps = state => ({});
// 将action与dispatch进行绑定并注入组件的props
const mapDispatchToProps = dispatch => ({
    //区分绑定到props的action与传递的props
    actions: bindActionCreators(
        {
            dispatch,
            data,
        },
        dispatch
    )
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
    static defaultProps = {
    };
    //propTypes 验证
    static propTypes = {
        actions: PropTypes.shape({
            dispatch: PropTypes.func.isRequired,
        }).isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
          
        };
        Object.assign(this, {
            getList: this.getList.bind(this),
        })
    }

    componentWillMount() {
       
    }

    getList() {

    }

    render() {
        
        return (
            <div>
                <h1>{this.getList}</h1>
                <Child data={'Home'} />
            </div>
        );
    }
}