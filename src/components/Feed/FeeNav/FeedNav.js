import React from "react";
import { FaUserPlus } from "react-icons/fa";
import './FeedNav.css'
const FeedNav = () => {
  return (
    <div className="d-flex justify-content-between mt-5  border border-top-0 border-start-0 border-end-0 ">
      <ul className="nav  ">
        <li className="nav-item border border-top-0 border-start-0 border-end-0 border-dark border-2 bor pb-3">
          <a
            className="nav-link text-black fw-bold"
            aria-current="page"
            href="/"
          >
            All Posts(32)
          </a>
        </li>

        <div className="d-flex feedLink">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Job
            </a>
          </li>
        </div>
      </ul>

      <ul className="nav">
        <li className="nav-item dropdown">
          <button
            className="nav-link btn btn-light text-black dropdown-toggle"
            data-bs-toggle="dropdown"
            href="/"
            aria-expanded="false"
          >
            Write a Post
          </button>
        </li>
        <li className="nav-item ms-3">
          <button className="nav-link btn btn-primary text-white d-flex justify-content-center align-items-center">
            <FaUserPlus></FaUserPlus>
            <div className='ms-1'>Join Group</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeedNav;
