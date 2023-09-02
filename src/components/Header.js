import { useState } from "react";

const Header = () => {

  const[btnName,setBtnName]= useState('Login')

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://tse3.mm.bing.net/th?id=OIP.-Yyvp72aoLShDLLKl_-K0AAAAA&pid=Api&P=0&h=180 "
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName=='Login'?setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  


  export default Header;