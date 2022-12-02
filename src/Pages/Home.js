import { Component, Fragment } from "react";

class Home extends Component{

  changePath = ()=>{
    this.props.history.push("/ProductDetails/10?query=QueeryParam")
  }
  render(){
    console.log(this.props);
    return (
      <Fragment>
        <h3>Home </h3>
        <button onClick={this.changePath.bind(this)} >Go To Product DEtails</button>
      </Fragment>
    )
  }
}

export default Home
