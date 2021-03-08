import React from 'react'
import './App.css';
import {Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component ={Details}/>
        <Route path="/cart" component ={Cart}/>
        <Route  component ={Default}/>
      </Switch>
      <Modal/>
      <Footer copy="2021" developer="Developed by Samwel Mchomvu From NOTTECH Lab"/>
    </React.Fragment>
  );
}

export default App;
