import { Component } from "react";
import { CounterView } from "./Counter.view";

type CounterContainerProps = {};

type CounterContainerState = {
  counterNum: number;
  isLoding: boolean;
};

class CounterContainer extends Component<
  CounterContainerProps,
  CounterContainerState
> {
  constructor(props: CounterContainerProps) {
    super(props);
    this.state = { counterNum: 0, isLoding: false };
  }
  // state = { counterNum: 0 };

  componentDidMount() {
    this.delayPrint();
  }

  componentDidUpdate() {
    this.delayPrint();
  }

  delayPrint = () => {
    setTimeout(() => {
      console.log("Class component counterNum---" + this.state.counterNum);
    }, 3000);
  };

  onClickIncrement = () => {
    this.setState((pre) => {
      return { ...pre, counterNum: pre.counterNum + 1 };
    });
  };

  onClickDecrement = () => {
    this.setState((pre) => {
      return { ...pre, counterNum: pre.counterNum - 1 };
    });
  };

  onClickAddAmount = (amount: number = 0) => {
    this.setState((pre) => {
      return { ...pre, counterNum: pre.counterNum + amount };
    });
  };

  onClickAddAsync = (amount: number = 0) => {
    this.setState((pre) => {
      return { ...pre, isLoding: true };
    });
    setTimeout(() => {
      this.onClickAddAmount(amount);
      this.setState((pre) => {
        return { ...pre, isLoding: false };
      });
    }, 3000);
  };

  onClickAlertBtn = () => {
    setTimeout(() => {
      alert(
        "Class component render the counterNum is " + this.state.counterNum,
      );
    }, 3000);
  };

  render() {
    return (
      <CounterView
        counterNum={this.state.counterNum}
        isLoading={this.state.isLoding}
        onClickIncrement={this.onClickIncrement}
        onClickDecrement={this.onClickDecrement}
        onClickAddAmount={this.onClickAddAmount}
        onClickAddAsync={this.onClickAddAsync}
        onClickAlertBtn={this.onClickAlertBtn}
      />
    );
  }
}

export { CounterContainer as ClassCounter };
