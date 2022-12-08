import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Fragment} from 'react';
import {Switch, Link, exact, Route} from 'react-router-dom';

import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

import './index.css';
import App from './App';

let render = (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={App}  />
        <Route exact path="/Home" component={Home}  />     
        <Route exact path="/Home/*" component={Home}  />        
        <Route exact path="/ProductDetails/:id" component={ProductDetails}  />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

ReactDOM.render(render, document.getElementById('root'));
