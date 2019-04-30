import React from "react";

class Button extends React.Component {
  state = {
    color: this.props.color,
    counter: 0,
    label: "LIKES"
  };

  handleClick = () => {
    let { counter } = this.state;
    let colorsArray = ["red", "blue", "green", "indigo", "orange", "yellow"];

    this.setState({
      counter: ++counter, // counter + 1
      label: counter === 1 ? "LIKE" : "LIKES",
      color: colorsArray[counter % colorsArray.length]
    });
  };

  render() {
    const { color, counter, label } = this.state;
    const style = { backgroundColor: color, color: "white" };

    return (
      <button onClick={this.handleClick} style={style}>
        {counter} {label}
      </button>
    );
  }
}

export default Button;
