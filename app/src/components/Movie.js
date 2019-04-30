import React from "react";

const Movie = props => {
  console.log(props);

  const { title, year } = props;
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
