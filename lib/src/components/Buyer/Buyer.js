import React, { Component } from "react";
import "./Buyer.css";

const buyerCodeURL = "http://localhost:3001/sales/buyer/code/";

class Buyer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchaseData: [],
      buyerCode: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.componentDidMount();
    console.log("handled buyer click");
  };
  setBuyer = buyer => {
    this.setState({ purchaseData: buyer[0] });
  };

  componentDidMount() {
    const buyerCode = this.state.buyerCode;
    const url = `${buyerCodeURL}${buyerCode}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newBuy = response;
        this.setBuyer(newBuy);
        console.log(this.state.purchaseData);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleClick}>
          <h2>Search for a specific Country's Purchases</h2>
          <input
            type="text"
            placeholder="3 digit ISO code"
            value={this.state.saleCountry}
            onChange={e => {
              this.setState({ buyerCode: e.target.value });
            }}
          />
          <button>Submit</button>
        </form>
        <h1>Basic info about {this.state.buyerCode}</h1>
      </div>
    );
  }
}
export default Buyer;
