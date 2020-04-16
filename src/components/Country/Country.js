import React, { Component } from "react";
import "./Country.css";

//make this component like sales component

const countryURL = "https://lord-of-war-data.herokuapp.com/countries/code/";
// const countryURL = "http://localhost:3001/countries/code/";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: {},
    };
  }

  setCountry = (country) => {
    this.setState({ countryData: country[0] });
  };
  componentDidMount() {
    const alpha3Code = this.props.match.params.alpha3Code;
    const url = `${countryURL}${alpha3Code}`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let newCountry = response;
        console.log(newCountry);
        this.setCountry(newCountry);
        console.log(this.state.countryData.name);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="countryData_container">
        <div className="countryData">
          <h2>
            <span>Basic info about: </span>
            {this.state.countryData.name}
          </h2>
          <h3>
            <span>Country ISO Code: </span>
            {this.props.match.params.alpha3Code}
          </h3>
          <h3>
            <span>Capital: </span>
            {this.state.countryData.capital}
          </h3>
          <h3>
            <span>Region: </span>
            {this.state.countryData.region}
          </h3>
          <h3>
            <span>Sub-Region: </span>
            {this.state.countryData.subregion}
          </h3>
          <h3>
            <span>2 Digit ISO Code: </span>
            {this.state.countryData.alpha2Code}
          </h3>
          <h3>
            <span>3 Digit ISO Code: </span>
            {this.state.countryData.alpha3Code}
          </h3>
          <h3>
            <span>Population: </span>
            {this.state.countryData.population}
          </h3>
          {/* <h3>
          <span>Borders: </span>
          {this.state.countryData.borders}
        </h3> */}
          <h4> </h4>
        </div>
      </div>
    );
  }
}

export default Country;
