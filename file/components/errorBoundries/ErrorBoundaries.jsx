import React, { Component } from 'react';

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      errorMessage: '' 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.log('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>{this.props.fallback} {this.state.errorMessage}</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
