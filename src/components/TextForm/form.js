import React, { Component } from "react";
import PropTypes from "prop-types";
import "./form.less";

/**
 * 纯展示型表单
 */

export default class TextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    getAsterisk(data, key) {
        const isShow = this.state.isShow;
        const realBirthday = this.state.realBirthday;
        const t = this;
        let textDiv = "";
        if (key === 'birthday') {
            textDiv = "******";
        } else {
            textDiv = data[key];
        }
        return <span >
            {key === "birthday" ? (realBirthday || textDiv) : textDiv}
            {
                !isShow && key === 'birthday' ? <span className="steps-asterisk" onClick={(event) => {
                    event.stopPropagation();
                    t.setState({
                        isShow: true,
                        realBirthday: data[key]
                    })
                }}>显示</span> : ""
            }
        </span>
    }
    render() {
        const { data, labelMapper } = this.props;
        const keys = Object.keys(data);
        const t = this;
        return (
            <div>
                {keys.filter(key => !!data[key]).map(
                    key => labelMapper[key] && (
                        <div className="growth-profile-group" key={`rlw-${key}`}>
                            <div className="growth-profile-field">{labelMapper[key]}</div>
                            <div className="growth-profile-value">
                                {t.getAsterisk(data, key)}
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}
TextForm.defaultProps = {};
TextForm.propTypes = {
    data: PropTypes.object,
    labelMapper: PropTypes.object
};
module.exports = TextForm;
