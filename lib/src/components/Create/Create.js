import React, { Component } from "react";
import Form from "../CreateCountry/CreateCountry";

class Create extends Component {
  handleSubmit(data) {
    console.log("form submission data", data);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}></Form>
      </div>
    );
  }
}

export default Create;
