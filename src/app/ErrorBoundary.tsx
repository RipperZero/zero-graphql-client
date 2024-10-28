import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  renderError?: (error: Error) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  children?: ReactNode;
};

type State =
  | {
      hasError: false;
    }
  | {
      hasError: true;
      error: Error;
    };

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static defaultProps: Partial<Props> = {
    onError: (error) => {
      console.log(`${error}`, "color: red");
    },
    renderError: (_error) => {
      return <div>Error</div>;
    },
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.props.renderError) {
      if (this.state.hasError) {
        return this.props.renderError(this.state.error);
      }
    }
    return this.props.children;
  }
}
