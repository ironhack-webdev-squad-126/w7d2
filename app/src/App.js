import React from "react";
import Header from "./components/Header";
import User from "./components/User";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <User firstName="John" lastName="Doe" />
      <User firstName="Jane" lastName="Doe" />
      {/* <Header /> */}
    </div>
  );
};

export default App;
