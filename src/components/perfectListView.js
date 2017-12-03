

// import { Component } from "react";
import { ListView } from "antd-mobile";
class PerfectListView extends ListView {
    constructor(props) {
        super();
        this.params = {
            x: 0,
            y: 0,
        };
    }
    componentDidMount() {
        this.el = document.querySelector(".am-list-view-scrollview");
        this.bindListViewAction();
    }

    componentWillUnmount() {
        this.el.removeEventListener("touchmove", this.checkTouchMove);
        this.el.removeEventListener("touchend", this.timeoutFunc);
    }

    simulateTouchEnd() {
        var event = new TouchEvent('touchend', {
            'view': window,
            'bubbles': true,
            'cancelable': true,
        });
        var el = this.el;
        var touchToggle = !el.dispatchEvent(event);
        if (touchToggle) {
            // A handler called preventDefault.
            console.log("滑动成功")
        } else {
            // None of the handlers called preventDefault.
            console.log("尚未成功");
        }
    }

    bindListViewAction() {
        var el = this.el;
        el.addEventListener("touchmove", this.checkTouchMove)
        el.addEventListener("touchend", this.timeoutFunc)
    }

    checkTouchMove = (e) => {
        console.log("touchMove", e)
        this.params = {
            x: e.pageX && e.pageX,
            y: e.pageX && e.pageY,
        }
        if (this.params.y < 0) {
            this.timeoutId = setTimeout(() => {
                this.simulateTouchEnd();
            }, 100);
        }
    }

    timeoutFunc = (e) => {
        this.timeoutId && clearTimeout(this.timeoutId);
    }
}

export default finalListView