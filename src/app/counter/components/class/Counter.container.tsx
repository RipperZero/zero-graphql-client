import { Component } from "react";
import { CounterView } from "./Counter.view";

type CounterContainerProps = {};

type CounterContainerState = {
  counterNum: number;
};

export class CounterContainer extends Component<
  CounterContainerProps,
  CounterContainerState
> {
  constructor(props: CounterContainerProps) {
    super(props);
    this.state = { counterNum: 0 };
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
    // this.setState({ counterNum: this.state.counterNum + 1 });
    // this.setState((pre) => {
    //   return { counterNum: pre.counterNum + 1 };
    // });
    this.setState((pre) => ({ counterNum: pre.counterNum + 1 }));
  };

  onClickDecrement = () => {
    // this.setState({ counterNum: this.state.counterNum - 1 });
    this.setState((pre) => ({ counterNum: pre.counterNum - 1 }));
  };

  onClickAddAmount = (amount: number = 0) => {
    // this.setState({ counterNum: this.state.counterNum + amount });
    this.setState((pre) => ({ counterNum: pre.counterNum + amount }));
  };

  onClickAddAsync = (amount: number = 0) => {
    setTimeout(() => this.onClickAddAmount(amount), 1000);
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
        onClickIncrement={this.onClickIncrement}
        onClickDecrement={this.onClickDecrement}
        onClickAddAmount={this.onClickAddAmount}
        onClickAddAsync={this.onClickAddAsync}
        onClickAlertBtn={this.onClickAlertBtn}
      />
    );
  }
}
