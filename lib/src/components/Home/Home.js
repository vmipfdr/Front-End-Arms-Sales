import React, { Component } from "react";
import "./Home.css";

//here I should do a fetch for the country data and sales data and set it to state

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Worldwide Historical Arms Sales!</h1>
        <p>
          This is a very simple front end site that allows you to navigate
          through arms sales from 1998 and 2018.
        </p>
        <p>
          The records has data from http://armstrade.sipri.org/ correlated with
          some nice country data from https://restcountries.eu/
        </p>
      </div>
    );
  }
}

export default Home;
