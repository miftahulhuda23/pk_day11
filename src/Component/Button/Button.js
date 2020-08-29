import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.color === "green") {
      this.setState({ color: "blue" });
    } else {
      this.setState({ color: "green" });
    }
  }
  render() {
    const props = this.props || {};
    return (
      <button style={this.state} onClick={this.changeColor}>
        {props.text}
      </button>
    );
  }
}

export default Button;
