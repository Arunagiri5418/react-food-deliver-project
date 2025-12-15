import React from 'react';
import './searchbox.css';
import Footer from './Footer';

const Searchbox = ({ placeholder, handleChange }) => (
  <div>
  <div className="search-container">
    <center>
    <input
      type="search"
      className="search-box"
      placeholder="Search for a Restaurant or a Dish"
      onChange={handleChange}
    />
    <button type="submit" className="search-button">🔍</button>
  
 
    </center>
     
  </div>
  <div className='abi'>
    <h3> Easy order &  fast delivery</h3> </div>
    <div id="fl101">
    <div id="di101">  
      
    <h1 style={{marginTop:'200px'}}>
      <span> HUNGRY  ? </span> Just Wait
    </h1>
    <h1>Food At <span> Your Door!</span></h1>
    </div>
  <div id="di101">
  <div id="imgco1">

  </div></div>
  </div>
  <div>
   <Footer/>
  </div>
  </div>
   
);

export default Searchbox;