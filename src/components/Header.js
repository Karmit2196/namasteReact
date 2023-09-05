import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between shadow-lg m-2 bg-pink-400">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th?id=OIP.-Yyvp72aoLShDLLKl_-K0AAAAA&pid=Api&P=0&h=180 "
          alt=""
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
