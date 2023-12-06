import React from 'react';
import "./header.css";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
    <div className="header">
      
      <div className="App-header">
       <div className="header-logo">
        <StoreIcon classname="logo-icon" fontSize="large"/>
        <h2 className="logotitle">DS-shop</h2>
       </div>

      <div className="header-search">
        <input type="text" className="searchinput" />
        <SearchIcon className="searchicon" fontSize="large"/>
      </div>
      
      <div className="header-navigation">

      <div className="nav-item">
        <a href="">Sign In</a>
      
      </div>

      <div className="nav-item">
        <a href="">shop</a>
      
      </div>
      
      <div className="nav-item">
        <a href=""></a>
        <div classname="cart-icon">
        <LocalGroceryStoreIcon  />
        <span className="cart-count">2</span>
        </div>
      </div>

      </div>

      </div>

    </div>
  );
}
export default Header;