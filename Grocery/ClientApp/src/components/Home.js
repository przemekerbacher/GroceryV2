import React, { Component } from "react";
import Header from "./Home/Header";
import Features from "./Home/Features";
import About from "./Home/About";
import Promotions from "./Home/Promotions";
import Newsletter from "./Home/Newsletter";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="home">
        <Header />
        <Features />
        <About />
        <Promotions />
        <Newsletter />
      </div>
    );
  }
}
