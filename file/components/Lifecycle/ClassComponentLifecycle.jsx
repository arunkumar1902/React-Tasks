import React, { Component } from 'react';

class ClassComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('/n constructor: Component is created');
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: Props or State changed');
    return null; // No state change
  }

  componentDidMount() {
    console.log('componentDidMount: Component is mounted');
    console.log('---------------------');

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding to re-render');
    return nextState.count !== this.state.count; // prevent unnecessary re-renders
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Before changes are applied to the DOM');
    return null; 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has updated');
    console.log('---------------------');

  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render: Component is rendering');

    return (
      <div>
        <h1>Class Component Lifecycle </h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>

    );
  }
}

export default ClassComponentLifecycle;


// mounting phase - constructor(), getDerivedStateFromProps(), render(), componentDidMount()
// updating	phase - getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
// unmounting phase - componentWillUnmount()
