import "./index.less";

import FastClick from "fastclick";

// utils
import { getUrlParam } from "../utils/common";
import { set } from "../utils/db";

import { getBrowserInfo } from "../utils/browser";
import "../utils/polyfill";

// const getEnv = domain =>
// R.find(env => domain.indexOf(env) !== -1, ["pro", "pre", "daily"]);
// const env = getEnv(window.location.host);

// 如果是预发或者是日常神龙才能出现
// const debuggable = ["pre", "daily"].indexOf(env) !== -1;

function envCheck(browserInfo) {
    // PC端暂时不支持，提示去mobile操作
    if (browserInfo.isPCDing) {
        window.location.hash = "pc";
    } else if (!browserInfo.isDing && process.env.NODE_ENV !== "development") {
        // 是外部浏览器打开，直接跳转
        window.location.href = "http://www.baidu.com";
    }
}
function initializeDB() {
    // const isLwp = false;
    // set("isLwp", isLwp);
    // set(
    //     "baseUrl",
    //     isLwp ? "/r/Adaptor/HrmEmployeeInfoEditI/" : "/hrmregister/mobile/emp/"
    // );
    // set("dipUrl", "http://dip.alibaba-inc.com/api/v2/services/schema/mock/");
    set("corpId", getUrlParam("corpId"));
    set("userId", getUrlParam("userId"));
}
// var counter = (function() {
//   let count = 0;

//   return () => {
//     setTimeout(() => (count = 0), 2000);
//     if (count === 5 && debuggable) {
//       window.location.hash = "dragon";
//     }
//     return ++count;
//   };
// })();
// 做一些项目的初始化操作
(function doInit() {
    // ding国际化
    // autoInit();
    // 环境检查
    // envCheck(getBrowserInfo());
    // 初始化DB
    initializeDB();

    // 注册g2 mobile的shape样式

    // document.body.addEventListener("click", counter);

    if ("addEventListener" in document) {
        document.addEventListener(
            "DOMContentLoaded",
            function () {
                FastClick.attach(document.body);
            },
            false
        );
    }

})();

if (process.env.NODE_ENV === "development") {
    require("./index.dev.js");
} else {
    require("./index.prod.js");
}
