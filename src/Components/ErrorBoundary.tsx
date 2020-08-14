import React from 'react';

export class ErrorBoundary extends React.Component {
  state: { hasError: boolean };

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
