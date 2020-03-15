import React, { Component } from "react";

class Sale extends Component {
  render() {
    return (
      <div className="sale">
        <h3>Buyer ISO Code: {this.state.buyer}</h3>
        <h4>Buyer Full Name: {this.state.buyerFull}</h4>
        <h4>Order Year: {this.state.orderDate}</h4>
        <h4>Delivery Year: {this.state.deliveryYear}</h4>
        <h4>Quantity Ordered: {this.state.orderNumber}</h4>
        <h4>Weapon Description: {this.state.weaponDescription}</h4>
        <h4>Weapon Type: {this.state.weaponType}</h4>
        <h4>Weapon Category: {this.state.weaponCategory}</h4>
        <h4>Seller ISO Code: {this.state.seller}</h4>
        <h4>Seller Full Name: {this.state.sellerFull}</h4>
      </div>
    );
  }
}

export default Sale;
