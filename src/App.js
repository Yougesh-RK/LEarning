

import { Component, Fragment } from 'react';


class App extends Component {
  
  changePath = ()=>{
    this.props.history.push("/Home");
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h3>App Component </h3>
        <button onClick={this.changePath.bind(this)} >Go to Home</button>
      </Fragment>
    )
  }
}

export default App;
