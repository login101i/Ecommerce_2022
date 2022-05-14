import React, { Component } from "react";
import { HomePage } from "./pages/homepage.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { ShopPage } from "./pages/shop/shop.component.jsx";
import { Header } from "./components/header/header.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
