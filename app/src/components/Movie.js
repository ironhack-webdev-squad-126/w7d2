import React from "react";

const Movie = props => {
  const { title, year } = props.data;
  const { deleteMovie } = props;

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <p>released in: {year}</p>
      <button onClick={deleteMovie}>Delete</button>
    </React.Fragment>
  );
};

export default Movie;
