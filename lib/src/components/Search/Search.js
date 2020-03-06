import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryName: ""
    };
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.check}>
          <h1>Search for a specific Country</h1>

          <input
            type="text"
            placeholder="Country Name"
            value={this.state.countryName}
            onChange={e => {
              this.setState({ countryName: e.target.value });
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Search;

// router.get("/", countryController.index);
// router.get("/:name", countryController.showName);
// router.get("/code/:alpha3Code", countryController.showCode);
// router.get("/region/:region", countryController.showRegion);
// router.post("/", countryController.create);
// router.put("/:name", countryController.edit);
// router.delete("/:name", countryController.delete);
