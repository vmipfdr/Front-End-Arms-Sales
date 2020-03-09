import React, { Component } from "react";

//make this component like sales component

const countryURL = "http://localhost:3001/countries/code/";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: {}
    };
  }

  setCountry = country => {
    this.setState({ countryData: country[0] });
  };
  componentDidMount() {
    const alpha3Code = this.props.match.params.alpha3Code;
    const url = `${countryURL}${alpha3Code}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newCountry = response;
        console.log(newCountry);
        this.setCountry(newCountry);
        console.log(this.state.countryData.name);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Basic info about {this.props.match.params.alpha3Code}</h1>
        <h3>Country Name: {this.state.countryData.name}</h3>
        <h3>Capital: {this.state.countryData.capital}</h3>
        <h3>Region: {this.state.countryData.region}</h3>
        <h3>Sub-Region: {this.state.countryData.subregion}</h3>
        <h3>2 Digit ISO Code: {this.state.countryData.alpha2Code}</h3>
        <h3>3 Digit ISO Code: {this.state.countryData.alpha3Code}</h3>
        <h3>Population: {this.state.countryData.population}</h3>
        <h3>Borders: {this.state.countryData.borders}</h3>
        <h4> </h4>
      </div>
    );
  }
}

export default Country;
