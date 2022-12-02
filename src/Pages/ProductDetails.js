import { Component } from "react";

class ProductDetails extends Component {

  render(){
    console.log(this.props)
    // let transform = new URLSearchParams(this.props.match.query)
    return (
      <h3>{this.props.match.params.id} </h3>
    )
  }
}

export default ProductDetails;
