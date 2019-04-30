import React from "react";
import Movie from "./Movie";

class MoviesList extends React.Component {
  state = {
    movies: [
      { title: "Titanic", year: 1998 },
      { title: "La Haine", year: 1995 },
      { title: "Le Cinquième Element", year: 1997 }
    ]
  };

  handleClick = index => {
    // const movies = this.state.movies.slice()
    // const movies = [...this.state.movies]
    // movies.splice(index, 1)

    const { movies } = this.state;
    this.setState({
      movies: movies.filter((el, i) => i !== index)
    });
  };

  render() {
    const { movies } = this.state;

    const movieElements = movies.map((el, i) => {
      return <Movie deleteMovie={() => this.handleClick(i)} {...el} key={i} />;
      //   return <Movie deleteMovie={() => this.handleClick(i)} title={el.title} year={el.year}   key={i} />;
    });

    return (
      <ul>
        {movieElements}

        {/* {movies.map((el, i) => (
          <Movie data={el} key={i} />
        ))} */}
      </ul>
    );
  }
}

export default MoviesList;
