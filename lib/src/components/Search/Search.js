import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: false
    };
    this.passwordSet = this.passwordSet.bind(this);
    this.passwordConfirm = this.passwordConfirm.bind(this);
    this.check = this.check.bind(this);
  }

  passwordSet = evt => {
    this.setState({ password: evt.target.value });
    console.log(this.state.password);
  };

  passwordConfirm = evt => {
    this.setState({ passwordConfirm: evt.target.value });
    console.log(this.state.passwordConfirm);
  };

  check = evt => {
    evt.preventDefault();
    if (this.state.password == this.state.passwordConfirm) {
      this.setState({ valid: true });
      return <p> We have a match</p>;
    } else {
      this.setState({ valid: false });
      return <p> No hackers allowed</p>;
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.check}>
          <h1>Sign Up</h1>

          <input
            type="text"
            placeholder="username"
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={evt => {
              this.passwordSet(evt);
            }}
          />
          <input
            onChange={this.passwordConfirm}
            type="password"
            placeholder="confirmPassword"
            value={this.state.passwordConfirm}
            onChange={evt => {
              this.passwordConfirm(evt);
            }}
          />
          <button
            onClick={e => {
              this.check(e);
            }}
          >
            Submit
          </button>
        </form>
        <div>Is your password valid? {`${this.state.valid}`}</div>
      </div>
    );
  }
}
export default Search;
