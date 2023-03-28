import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Counter constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Counter getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Counter componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Counter getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Counter componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Counter componentWillUnmount");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Counter render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
