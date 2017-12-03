
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker, List, TextareaItem } from "antd-mobile";

//utils
import { type } from "../../utils/common.js";

/**
 * @class  地域选择器
 * 
 */
class AreaSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
        // bind functions
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onTextItemChange = this.onTextItemChange.bind(this);
    }
    static defaultProps = {
        text: <span />, // eg: '户籍地址'
        // eg: [{label:'河南',value:1,childreb:[{label:'郑州',value:'101'}]},{label:'河北',value:2}]
        data: [],
        label: "",
        onChange: () => null
    };
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        label: PropTypes.string,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        data: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        initialValue: PropTypes.string
    };
    componentWillMount() {
        // fix bug : 低网速，地址加载不出来的bug
        const { initialValue, getLocation, data } = this.props;

        if (!initialValue) return;

        const parsedvalue =
            type(initialValue) === "string" ? JSON.parse(initialValue) : initialValue;

        if (parsedvalue && parsedvalue.province) {
            this.setState({
                value: [parsedvalue.province, parsedvalue.city, parsedvalue.district],
                address: parsedvalue.address
            });
        }
        if (getLocation && !this.state.value.length) {
            console.log('Getting Location');
            const me = this;

        }

    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;

        if (!value) return;

        const parsedvalue = type(value) === "string" ? JSON.parse(value) : value;

        if (parsedvalue && parsedvalue.province) {
            this.setState({
                value: [parsedvalue.province, parsedvalue.city, parsedvalue.district],
                address: parsedvalue.address
            });
        }
    }

    getLocationValue(city_data, current_location) {
        if (!city_data) return "";
        if (!current_location) return "";

        const province = city_data.filter(q => q.label === current_location.province)[0];
        const city = province.children.filter(q => q.label === current_location.city)[0];
        const district = city.children.filter(q => q.label === current_location.district)[0];

        return [province.value, city.value, district.value]
    }

    handleOnChange(value) {
        this.setState({
            value
        });
        this.props.onChange({
            province: value[0],
            city: value[1],
            district: value[2],
            address: this.state.address
        });
    }
    onTextItemChange(address) {
        const value = this.state.value;
        this.setState({
            address
        });
        this.props.onChange({
            province: value[0],
            city: value[1],
            district: value[2],
            address
        });
    }
    render() {
        const { text, data, label, required } = this.props;
        return (
            <div className="com-area-wrapper">
                <Picker
                    data={data}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                >
                    <List.Item arrow="horizontal">{text}</List.Item>
                </Picker>
                <List.Item>
                    <TextareaItem
                        rows={3}
                        value={this.state.address}
                        placeholder={`请输入详细${label + (required ? "(必填)" : "")}`}
                        onChange={this.onTextItemChange}
                    />
                </List.Item>
            </div>
        );
    }
}

export default AreaSelect;
