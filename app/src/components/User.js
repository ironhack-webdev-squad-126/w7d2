import React from "react";

class User extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       user: {
  //         firstName: "John",
  //         lastName: "Doe"
  //       }
  //     };
  //   }

  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    buttonText: "Click me!",
    clicked: 0
  };

  handleClick = () => {
    let { firstName, clicked } = this.state;

    this.setState({
      firstName:
        firstName === firstName.toLowerCase()
          ? firstName.toUpperCase()
          : firstName.toLowerCase(),
      clicked: ++clicked
    });
  };

  render() {
    const { firstName, lastName, buttonText, clicked } = this.state;

    return (
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        {/* <Greeting firstName={firstName} /> */}
        <p>Clicked {clicked} times</p>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

// create a button component
// button should change color to a new color on click
// should show the number of clicks
// 1 => LIKE
// 0 and 2+ => LIKES

export default User;
