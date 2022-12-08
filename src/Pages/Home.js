import { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";
import HomeChildRoute from './HomeChildRoute'

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
        <Link to="/Home/HomeChild">HomeChild Route</Link>
        <Route path='/Home/HomeChild' >
          <HomeChildRoute></HomeChildRoute>
        </Route>
      </Fragment>
    )
  }
}

export default Home
