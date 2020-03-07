import React, { Component } from "react";

//make this component like sales component

const countryURL = "https://lord-of-war-data.herokuapp.com/countries/code/";

class Country extends Component {
  componentDidMount() {
    const alpha3code = this.props.match.params.alpha3code;
    const url = `${countryURL}${alpha3code}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newCountry = response.alpha3code;
        this.props.setCountry(newCountry);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Basic ifo about {this.props.match.params.alpha3code}</h1>
      </div>
    );
  }
}

export default Country;
