import React, { Component } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import CountriesList from "../CountriesList/CountriesList";
import Search from "../Search/Search";
import Country from "../Country/Country";

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
            <img src="public/unnamed.jpg" alt="" />
            <h1>Worldwide Arms Deals</h1>
          </Link>
          <Link to="/countrieslist">Country List</Link>
          <Link to="/search">Search Countries</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/countrieslist" component={CountriesList} />
          <Route path="/search" component={Search} />
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
