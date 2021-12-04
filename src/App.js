import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Favorites from './components/Favorites/Favorites';
import Default from './components/Default';
import Home from './components/Home';
import Modal from './components/Modal';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import AddProductPages from './components/AddProductsPage';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render(){

    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products/' component={ProductList}/>
          <Route exact path='/product/' component={Product}/>
          <Route exact path='/details/' component={Details}/>
          <Route exact path='/add/' component={AddProductPages}/>
          <Route exact path='/login/' component={LoginPage}/>
          <Route exact path='/logout/' component={LogoutPage}/>
          <Route exact path='/favorites/' component={Favorites}/>
          <Route exact path='/cart/' component={Cart}/>
          <Route exact component={Default}/>
        </Switch>
        <Modal/>
        <Footer/>

        
      </>
    );
  }


}

export default App;
