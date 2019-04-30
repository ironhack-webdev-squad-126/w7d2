import React from "react";

class MoviesList extends React.Component {
  state = {
    movies: [
      {
        title: "The Godfather",
        director: "Francis Coppola",
        hasOscars: true,
        IMDbRating: 9.2
      },
      {
        title: "Star Wars",
        director: "Rian Johnson",
        hasOscars: true,
        IMDbRating: 8.7
      },
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        hasOscars: false,
        IMDbRating: 9.3
      }
    ]
  };

  render() {
      let element = hasOscars ? <p>Oscar winning movie!</p> : ...

    return (
      <div>
        {this.state.movies.map((el, i) => (
          <div key={i}>
            <h2>{el.title}</h2>
            <p>Directed by: {el.director}</p>
            {el.hasOscars ? (
              <p>Oscar winning movie!</p>
            ) : (
              <p>No Oscars for you!</p>
            )}

            {el.IMDbRating > 9 && <p>This movie is a fan favourite</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default MoviesList;
