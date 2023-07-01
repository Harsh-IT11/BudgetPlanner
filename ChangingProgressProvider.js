import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
    animationCompleted: false,
  };

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const nextIndex = prevState.valuesIndex + 1;
        const animationCompleted = nextIndex >= this.props.values.length;

        if (animationCompleted) {
          this.clearInterval();
        }

        return {
          valuesIndex: nextIndex % this.props.values.length,
          animationCompleted,
        };
      });
    }, this.props.interval);
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  render() {
    const { valuesIndex, animationCompleted } = this.state;
    const currentValue =
      animationCompleted && valuesIndex === 0
        ? this.props.values[this.props.values.length - 1]
        : this.props.values[valuesIndex];

    return this.props.children(currentValue);
  }
}

export default ChangingProgressProvider;