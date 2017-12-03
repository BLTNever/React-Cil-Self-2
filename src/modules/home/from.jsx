import React from "react";
import PropTypes from "prop-types";
import { List, InputItem, TextareaItem } from "antd-mobile";

// components
import Select from "../../components/Select";
import DatePicker from "../../components/DatePicker/index";

//utils
import { validator } from "../../utils/form.js";

const Item = List.Item;

const From = ({ getFieldDecorator, getFieldProps, options, user }) => (
    <div>
        <div>
            <List>
                <Item>
                    {
                        getFieldDecorator("name", {
                            initialValue: user.name,
                            rules: [{ required: true, validator, label: "姓名" }]
                        })(
                            <InputItem placeholder="请输入">
                                <span className="required">*</span>姓名
                            </InputItem>
                        )
                    }
                </Item>
  
                <Item>
                    <TextareaItem
                        title={
                            <span>
                                <span className="required">*</span>备注
                            </span>
                        }
                        autoHeight
                        placeholder="请输入"
                        {...getFieldProps("tips", {
                            initialValue: user.tips,
                            rules: [{ required: true, validator, label: "备注" }]
                        }) }
                    />
                </Item>
                {
                    getFieldDecorator("time", {
                        initialValue: user.time,
                        rules: [{ required: true, validator, label: "日期" }]
                    })(
                        <DatePicker label="日期" required />
                    )
                }
            </List>
        </div>
    </div>
);
From.defaultProps = {};
From.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldProps: PropTypes.func.isRequired,
    options: PropTypes.object,
    user: PropTypes.object
};
module.exports = From;
