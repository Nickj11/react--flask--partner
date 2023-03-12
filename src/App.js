
import './App.css';

import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './Signup';
import Nav from './component/Nav';
import Singleproduct from './Singleproduct';
import Home from './Home';
import Login from './Login';
import Shop from './Shop';
import Item from './component/Item';
import Cart from './Cart';


export default function App(  ) {
  const [user, setUser] = useState([]);
  const [myCart, setMyCart] = useState([])

  const logMeIn = (user) => {
    setUser(user);

  };
  const logMeOut = () => {
    setUser({});
   
  };

  const getCart = async (user) => {
    if (user.apitoken) {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.apitoken}`
        }
      }

      const res = await fetch('http://127.0.0.1:5000/api/mycart', options);
      const data = await res.json();
      console.log(data)
      setMyCart(data);
    }else{
      setMyCart([])
    }
  };

  useEffect(() => {
    getCart(user)
  }, [user])



  return (
    <div>
      <BrowserRouter>

        <Nav user={user} logMeOut={logMeOut}   />
        <Routes>
       
          <Route path="/" element={<Shop  user={user}/>} />
          <Route path='/cart' element={<Cart myCart={myCart} user={user} getCart={getCart} setMyCart={setMyCart} />} />
          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/shop/:itemID' element={<Item user={user}/>} /> 
          <Route path='/products/:itemID' element={<Singleproduct />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

