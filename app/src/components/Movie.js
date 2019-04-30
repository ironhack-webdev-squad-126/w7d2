import React from "react";

class Movie extends React.Component {
  render() {
    const { title, year } = this.props.data;
    return (
      <React.Fragment>
        <h2>{title}</h2>
        <p>released in: {year}</p>
      </React.Fragment>
    );
  }
}

export default Movie;
