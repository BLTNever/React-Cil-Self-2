import { Component } from "react";

export default class SmartComponents extends Component {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
}
