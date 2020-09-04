import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Switch,Route } from 'react-router-dom';

import Home from './components/Home';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/contact-list">Contacts</Link>
      
    </div>
  </div>
</nav>

<div className="container">
<Switch>
  <Route path="/contact-list" component={ContactList} >
   
  </Route>
  <Route  path="/contact/:id" component={ContactDetail}>

  </Route>
  <Route path="/">
    <Home></Home>
  </Route>
</Switch>

</div>


      
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
