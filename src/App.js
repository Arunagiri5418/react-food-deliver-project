import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import './component/style.css';
import Restaurants from './component/Restaurants';
import Foods from './component/Foods';
import Payment from './component/Payment';
import Login from './component/Login';
import Signup from './component/Signup';
import Paymentgif from './component/Paymentgif';
import About from './component/About';
import Addresspage from './component/Addresspage';



import { IoIosPersonAdd } from "react-icons/io";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar">
          <h5><span>FOOD</span>ELIE </h5>
            <ul>
              
              <li><Link to="/Home">HOME</Link></li>
              <li><Link to="/Foods">FOODS</Link></li>
              <li><Link to="/Restaurants">RESTAURANTS</Link></li>
              <li><Link to="/About">ABOUT</Link></li>
              <li><Link to="/Contact">CONTACT</Link></li>
              <div className='prof'>
              <li className="user-icon">
              <Link to="/Login"><IoIosPersonAdd /></Link>
</li>
                
              </div>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Foods' element={<Foods />} />
            <Route path='/Restaurants' element={<Restaurants />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Paymentgif' element={<Paymentgif />} />
            <Route path='/About' element={<About />} />
            <Route path='/Addresspage' element={<Addresspage />} />
          </Routes>
        </div>
      </Router>
     
    </div>
  );
}

export default App;