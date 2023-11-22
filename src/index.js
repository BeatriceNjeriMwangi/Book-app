import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import CartItem from './pages/CartItem';
import BookDetails from './pages/BookDetails'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/cart" component={CartItem} />
      <Route path="/details" component={BookDetails} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
