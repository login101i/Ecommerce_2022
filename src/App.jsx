import React, { Component } from "react";
import { HomePage } from "./pages/homepage.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const HatsPage = () => {
  return <div>Hello from HatsPage</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path='/hats' component={<HatsPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
