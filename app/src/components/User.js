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
    buttonText: "Click me!"
  };

  handleClick = () => {
    const newState = {
      firstName: this.state.firstName.toUpperCase(),
      lastName: this.state.lastName.toUpperCase()
    };
    this.setState(newState);
  };

  render() {
    const { firstName, lastName, buttonText } = this.state;

    return (
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        {/* <Greeting firstName={firstName} /> */}
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default User;
