import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <div>Mounted!</div>;
  }
}

const root = document.getElementById("content");
ReactDOM.render(<App />, root);
