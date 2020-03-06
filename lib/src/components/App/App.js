import React, { Component } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import CountriesList from "../CountriesList/CountriesList";
// import Sales from "../Sales/Sales";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img src="public/unnamed.jpg" alt="" />
            <h1>Worldwide Arms Deals</h1>
          </Link>
          <Link to="/countrieslist">Country List</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/countrieslist" component={CountriesList} />
          {/* <Route
            path="/price/:currency"
            render={routerProps => (
              <Price
                setPrice={this.setPrice}
                {...routerProps}
                {...this.state}
              /> */}
          {/* )} /> */}
        </main>
      </div>
    );
  }
}

export default App;
