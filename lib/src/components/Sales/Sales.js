import React, { Component } from "react";
import axios from "axios";
import "./Sales.css";

//set this to local data then graduate to deployed data
const salesURL = "http://localhost:3000/sales";

class Price extends Component {
  componentDidMount() {
    const currency = this.props.match.params.currency;
    const url = `${salesURL}${currency}.json`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newPrice = response.bpi[currency].rate;
        this.props.setPrice(newPrice);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Bitcoin price in {this.props.match.params.currency}</h1>
        <div className="price">{this.props.price}</div>
      </div>
    );
  }
}

export default Price;
