import React, { Component } from "react";

class Form extends Component {
  getInitialState = () => {
    return {
      title: this.props.title || "some title"
    };
  };

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form name="create_country" className="form" onSubmit={this.handleSubmit}>
        <label>Country Name</label>
        <input
          type="text"
          id="country_name"
          required="required"
          // value={this.state.title}
          // onChange={this.handleTitleChange}
        />
        <button type="submit" id="create_submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
