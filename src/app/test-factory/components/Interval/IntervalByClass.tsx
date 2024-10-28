import { Component, ChangeEvent } from "react";

type IntervalByClassViewProps = {};

type IntervalByClassViewState = {
  count: number;
  delay: number;
};

export class IntervalByClassView extends Component<
  IntervalByClassViewProps,
  IntervalByClassViewState
> {
  state = {
    count: 0,
    delay: 1000,
  };
  timer?: NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(this.tick, this.state.delay);
  }

  componentDidUpdate(
    _prevProps: IntervalByClassViewProps,
    prevState: IntervalByClassViewState,
  ) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.timer!);

      this.timer = setInterval(this.tick, this.state.delay);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer!);
  }

  // logic functions start
  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDelayChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ delay: Number(event.target.value) });
  };
  // logic functions end

  // render functions start
  render() {
    return (
      <>
        <div>Class</div>
        <div>{this.state.count}</div>
        <input value={this.state.delay} onChange={this.handleDelayChange} />
      </>
    );
  }

  // render functions end
}
