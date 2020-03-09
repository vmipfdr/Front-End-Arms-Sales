import React, { Component } from "react";
import "./Seller.css";

//set this to local data then graduate to deployed data
const sellerCodeURL = "http://localhost:3001/sales/seller/code/";

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
    this.setState({ salesData: sales[0] });
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
        <h1>Basic info about {this.state.sellerCode}</h1>
        {/* <h4>Buyer: {this.state.sales[0].buyerFull}</h4> */}
      </div>
    );
  }
}

export default Seller;
