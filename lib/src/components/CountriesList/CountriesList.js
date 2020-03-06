import React, { Component } from "react";
import "./CountriesList.css";
import listOfCountries from "./Lists.json";
import { Link } from "react-router-dom";

class CountriesList extends Component {
  render() {
    let list = listOfCountries.map(item => {
      return (
        <div className="country" key={item.alpha3Code}>
          <p>
            <Link to={"/countrylist/" + item.alpha3Code}>
              {item.alpha3Code}
            </Link>
            : {item.name}
          </p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default CountriesList;
