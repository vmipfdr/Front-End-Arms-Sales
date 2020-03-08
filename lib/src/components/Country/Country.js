import React, { Component } from "react";

//make this component like sales component

const countryURL = "http://localhost:3001/countries/code/";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha3Code: null
    };
  }

  setCountry = alpha3Code => {
    this.setState({ alpha3Code: alpha3Code });
  };

  componentDidMount() {
    const alpha3Code = this.props.match.params.alpha3Code;
    const url = `${countryURL}${alpha3Code}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newCountry = response.alpha3Code;
        this.props.setCountry(newCountry);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Basic info about {this.props.match.params.alpha3Code}</h1>
        <h4> </h4>
      </div>
    );
  }
}

export default Country;

// <div className="receipt">
//   <h1>{props.info.person}</h1>
//   <h4>
//     <span>Main: </span>
//     {props.info.order.main}
//   </h4>
//   <h4>
//     <span>Protein: </span>
//     {props.info.order.protein}
//   </h4>
//   <h4>
//     <span>Rice: </span>
//     {props.info.order.rice}
//   </h4>
//   <h4>
//     <span>Sauce: </span>
//     {props.info.order.sauce}
//   </h4>
//   <h4>
//     <span>Drink: </span>
//     {props.info.order.drink}
//   </h4>
//   <h4>
//     <span>Cost: </span>
//     {props.info.order.cost}
//   </h4>
// </div>
//   );
