import React, { Component } from "react";
import "./CountriesList.css";
import listOfCountries from "./Lists.json";
import { Link } from "react-router-dom";

class CountriesList extends Component {
  render() {
    let list = listOfCountries.map((item) => {
      return (
        <div className="country_list__container">
          <div className="country" key={item.code}>
            <p>
              <Link to={"/country/" + item.code}>{item.code}</Link>: {item.name}
            </p>
          </div>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default CountriesList;
