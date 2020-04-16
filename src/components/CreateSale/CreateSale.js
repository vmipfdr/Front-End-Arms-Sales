import React, { Component } from "react";
import Axios from "axios";

class Form extends Component {
  constructor(props) {
    this.state = {
      sellerISOCode: "",
      sellerFull: "",
    };
  }
  getInitialState = () => {
    return {
      title: this.props.title || "some title",
    };
  };

  onChangeBuyer(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    if (this.state === "" || this.state === "") {
      return;
    } else {
      e.preventDefault();
      console.log("submitted!");
      const newSale = {
        sellerISOCode: this.state.sellerISOCode,
      };
      Axios.post("website", newSale).then((res) => console.log(res));
    }
  }
  render() {
    return (
      <form name="create_sale" className="form" onSubmit={this.handleSubmit}>
        <div className="sale">
          <h4>Buyer ISO Code: </h4>
          <input
            placeholder="Buyer ISO Code"
            text
            onChange={this.onChangeBuyer}
          />
          <br />
          <h4>Buyer Full Name: </h4>
          <input
            placeholder="Buyer Full Name"
            text
            onChange={this.onChangeBuyerFull}
          />
          <br />
          <h4>Order Year: </h4>
          <input
            placeholder="Order Year"
            text
            onChange={this.onChangeOrderYear}
          />
          <br />
          <h4>Delivery Year: </h4>
          <input
            placeholder="Delivery Year"
            text
            onChange={this.onChangeDeliveryYear}
          />
          <br />
          <h4>Quantity Ordered: </h4>
          <input
            placeholder="Quantity Ordered"
            text
            onChange={this.onChangeNumber}
          />
          <br />
          <h4>Weapon Description: </h4>
          <input
            placeholder="Weapon Description"
            text
            onChange={this.onChangeWeaponDesc}
          />
          <br />
          <h4>Weapon Type: </h4>
          <input
            placeholder="Weapon Type"
            text
            onChange={this.onChangeWeaponType}
          />
          <br />
          <h4>Weapon Category: </h4>
          <input
            placeholder="Weapon Category"
            text
            onChange={this.onChangeWeaponCategory}
          />
          <br />
          <h4>Seller ISO Code: </h4>
          <input
            placeholder="Seller ISO Code"
            text
            onChange={this.onChangeSeller}
          />
          <br />
          <h4>Seller Full Name: </h4>
          <input
            placeholder="Seller Full Name"
            text
            onChange={this.onChangeSellerFull}
          />
        </div>
        <button type="submit" id="create_submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

// class Post extends Component {
//   constructor(props) {
//     super(props);
//     //
//     this.state = {
//       postTitle: "",
//       postComment: ""
//     };
//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeComment = this.onChangeComment.bind(this);
//   }

//   onChangeTitle = e => {
//     this.setState({z
//       postTitle: e.target.value
//     });
//     console.log(this.state.postTitle);
//   };

//   onChangeComment = e => {
//     this.setState({
//       postComment: e.target.value
//     });
//     console.log(this.state.postComment);
//   };

//   onSubmit = e => {
//     if (this.state.postTitle === "" || this.state.postComment === "") {
//       return;
//     } else {
//       e.preventDefault();
//       console.log("Submitted");
//       const newPost = {
//         postTitle: this.state.postTitle,
//         postComment: this.state.postComment
//       };
//       Axios.post("https://shelter35.herokuapp.com/posts", newPost).then(res =>
//         console.log(res)
//       );
//       this.setState({
//         postTitle: "",
//         postComment: ""
//       });
//       this.props.history.push("/submitted");
//     }
//   };
//   render() {
//     return (
//       <div className="newPostContainer">
//         <form className="submitForm" onSubmit={this.onSubmit}>
//           <h1>Add Post</h1>
//           <div className="formInput">
//             <label className="inputLabel">Post Title: </label>
//             <Title
//               type="text"
//               placeholder="Post Title"
//               text
//               onChange={this.onChangeTitle}
//             />
//           </div>
//           <br />
//           <div className="formInput">
//             <label className="inputLabel">Post Comment: </label>
//             <Comment
//               className="inputBox"
//               label="Post your grievances here"
//               type="normal"
//               onChange={this.onChangeComment}
//             />
//           </div>
//           <br />
//           <div className="bottomEdit">
//             <Button
//               className="submitPost"
//               label="Submit"
//               type="white"
//               value="Submit"
//             />
//             <Link to={"/home"}>
//               <Button className="editHome" label="Home" type="home" />
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default Post;
