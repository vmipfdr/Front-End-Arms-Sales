import React, { Component } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import CountriesList from "../CountriesList/CountriesList";
import Search from "../Search/Search";
import Country from "../Country/Country";
import Sales from "../Sales/Sales";

//here I should set a method that is passed down to the country component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha3Code: null
    };
    this.setCountry = this.setCountry.bind(this);
  }

  setCountry(alpha3Code) {
    this.setState({ alpha3Code: alpha3Code });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>Worldwide Arms Deals</h1>
          </Link>
          <Link to="/countrieslist">Country List</Link>
          <Link to="/search">Search Purchases by Country</Link>
          <Link to="/sales">Search Sales by Country</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/countrieslist" component={CountriesList} />
          <Route path="/search" component={Search} />
          <Route path="/sales" component={Sales} />
          <Route
            path="/country/:alpha3Code"
            render={routerProps => (
              <Country
                setCountry={this.setCountry}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
