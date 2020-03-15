import React, { Component } from "react";
import "./Buyer.css";

const buyerCodeURL = "https://lord-of-war-data.herokuapp.com/sales/buyer/code/";
// const buyerCodeURL = "http://localhost:3001/sales/buyer/code/";

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
    this.setState({ purchaseData: buyer });
    console.log(this.state.purchaseData);
  };

  componentDidMount() {
    const buyerCode = this.state.buyerCode;
    const url = `${buyerCodeURL}${buyerCode}`;
    // console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        let newBuy = response;
        this.setBuyer(newBuy);
        // console.log(this.state.purchaseData);
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
        <h6>You are searching for {this.state.buyerCode} Purchases</h6>
        <h2>
          There are {this.state.purchaseData.length} {this.state.buyerCode}{" "}
          purchase records available from 1998 to 2018
        </h2>
        <h4>Buyer: {this.state.buyer}</h4>
        <h4>Delivery Year: {this.state.deliveryYear}</h4>
        <h4>Ordered: {this.state.orderDate}</h4>
      </div>
    );
  }
}
export default Buyer;
