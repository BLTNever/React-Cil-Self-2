
import React, { Component } from "react";
import { getUrlParam } from "../../utils/common";


export default class NoDataPage extends Component {
  render() {
    return (
      <div className="nodata-center">
        <img src="https://gw.alicdn.com/tfs/TB1rbIvl3MPMeJjy1XdXXasrXXa-114-112.png" alt=""/>
        <h4>未找到当前页面</h4>
      </div>
    );
  }
}
