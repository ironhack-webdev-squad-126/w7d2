import React from "react";
import Movie from "./Movie";

const MoviesList = () => {
  const movies = [
    { title: "Titanic", year: 1998 },
    { title: "La Haine", year: 1995 },
    { title: "Le Cinquième Element", year: 1997 }
  ];

  const movieElements = movies.map((el, i) => {
    return <Movie data={el} key={i} />;
  });

  return (
    <ul>
      {movieElements}

      {movies.map((el, i) => (
        <Movie data={el} key={i} />
      ))}
    </ul>
  );
};

export default MoviesList;
