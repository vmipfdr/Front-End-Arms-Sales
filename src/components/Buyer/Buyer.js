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
    if (this.state.purchaseData) {
      let posts = this.state.purchaseData.map(post => {
        return (
          <div className="order">
            <h4>
              <span>Buyer ISO Code: </span>
              {post.buyer}
            </h4>
            <h4>
              <span>Buyer: </span>
              {post.buyerFull}
            </h4>
            <h4>
              <span>Seller ISO Code: </span>
              {post.seller}
            </h4>
            <h4>
              <span>Seller: </span>
              {post.sellerFull}
            </h4>
            <h4>
              <span>Order Year: </span>
              {post.orderDate}
            </h4>
            <h4>
              <span>Delivery Year: </span>
              {post.deliveryYear}
            </h4>
            <h4>
              <span>Weapon Category Code: </span>
              {post.weaponCategory}
            </h4>
            <h4>
              <span>Weapon Description: </span>
              {post.weaponDescription}
            </h4>
            <h4>
              <span>Weapon Nomenclature: </span>
              {post.weaponType}
            </h4>
            <h4>
              <span>Order Quantity: </span>
              {post.orderNumber}
            </h4>
          </div>
        );
      });
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
          <div className="">{posts}</div>
        </div>
      );
    }
  }
}
export default Buyer;
