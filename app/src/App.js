import React from "react";
import Header from "./components/Header";
import User from "./components/User";
import Button from "./components/Button";
import MoviesList from "./components/MoviesList";
import "./App.css";

const App = () => {
  let listElements = ["hello", "goodbye"].map((el, i) => {
    // return React.createElement("li", null, el);
    return <li key={i}>{el}</li>;
  });

  console.log(listElements);

  return (
    <div className="App">
      {/* <Header /> */}
      <MoviesList />
      <ul>{listElements}</ul>
      <User firstName="John" lastName="Doe" />
      <User firstName="Jane" lastName="Doe" />
      <Button color="yellow" />
    </div>
  );
};

export default App;
