import React from 'react';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router> 
        <Routes>
          <Route exact path ='/' element ={<Home/>}/>
          <Route exact path ='/cart' element ={<Cart/>}/>
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;