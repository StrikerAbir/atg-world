import React from "react";
import logo from "../../assets/images/whole.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="d-none d-lg-block">
      <nav className="navbar bg-light py-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <form className="d-flex position-relative" role="search">
            <input
              className="searchField ps-5 py-2 rounded-pill border-0"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
            <div className="position-absolute ps-3 pt-2 " type="submit">
              <FaSearch></FaSearch>
            </div>
          </form>
          <a href="/" className="text-decoration-none text-black">
            {" "}
            Create account. <span className="text-primary">It's free!</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
