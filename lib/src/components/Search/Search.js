import React, { Component } from "react";
import "./Search.css";

const buyerCodeURL =
  "https://lord-of-war-data.herokuapp.com/sales/seller/code/";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyCountry: [],
      saleCode: ""
    };
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.check}>
          <h2>Search for a specific Country's Sales</h2>
          <input
            type="text"
            placeholder="3 digit ISO code"
            value={this.state.saleCountry}
            onChange={e => {
              this.setState({ saleCode: e.target.value });
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Search;
