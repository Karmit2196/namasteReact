import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="bg-blue-500 py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo-container">
          <img
            className="logo h-12"
            src="https://tse3.mm.bing.net/th?id=OIP.-Yyvp72aoLShDLLKl_-K0AAAAA&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="btn bg-white text-blue-500 hover:bg-blue-400 transition duration-300"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
