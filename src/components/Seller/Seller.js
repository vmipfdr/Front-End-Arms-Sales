import React, { Component } from "react";
import "./Seller.css";

//set this to local data then graduate to deployed data
const sellerCodeURL =
  "https://lord-of-war-data.herokuapp.com/sales/seller/code/";
// const sellerCodeURL = "http://localhost:3001/sales/seller/code/";

class Seller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesData: [],
      sellerCode: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.componentDidMount();
    console.log("handled seller click");
  };
  setSales = sales => {
    this.setState({ salesData: sales });
    console.log(this.state.salesData);
  };
  componentDidMount() {
    const sellerCode = this.state.sellerCode;
    const url = `${sellerCodeURL}${sellerCode}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newSale = response;
        // console.log(newSale);
        this.setSales(newSale);
        // console.log(this.state.salesData);
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.salesData) {
      let posts = this.state.salesData.map(post => {
        return (
          <div className="salesReceipt">
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
        <div>
          <form onSubmit={this.handleClick}>
            <h2>Search for a specific Country's Sales</h2>
            <input
              type="text"
              placeholder="3 digit ISO code"
              value={this.state.sellerCode}
              onChange={e => {
                this.setState({ sellerCode: e.target.value });
              }}
            />
            <button>Submit</button>
          </form>
          <h6>You are searching for {this.state.sellerCode} Sales</h6>
          <h2>
            There are {this.state.salesData.length} records of{" "}
            {this.state.sellerCode} sales available from 1998 to 2018
          </h2>
          <div className="container">
            <div className="">{posts}</div>
          </div>
        </div>
      );
    }
  }
}

export default Seller;
