import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.less"


export default class ToolTips extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        const isShow = this.state.isShow;
        const {
            color = "#fff",
            bcolor = "#3296fa",
            title = "",
            tipsName = ''
        } = this.props;
        const t = this;
        return <div className='tool-tips'
            onClick={(e) => { 
                t.setState({ isShow: !isShow })
                e.stopPropagation()
             }}>
            {this.props.children}
            <div
                className={`tool-tips ${tipsName}`}
                style={{
                    background: bcolor,
                    color: color,
                    display: isShow ? 'inline-block' : "none"
                }}>
                <i style={{
                    borderTopColor: bcolor,
                    display: isShow ? 'inline-block' : "none"
                }}></i>
                {title}
            </div>

        </div>
    }
}
ToolTips.propTypes = {
    children: PropTypes.children,
    bcolor: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    tipsName: PropTypes.string
}