import React, { useContext } from "react";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { StateContext } from "../../../App";
import "./FeedNav.css";
const FeedNav = () => {
  const { joinGroup, setJoinGroup } = useContext(StateContext);
  console.log(joinGroup);
  return (
    <div className="d-lg-flex d-none justify-content-between mt-5  border border-top-0 border-start-0 border-end-0 ">
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
            <span className="pe-2">Write a Post</span>
          </button>
        </li>
        <li className="nav-item ms-3">
          {joinGroup ? (
            <button
              onClick={() => setJoinGroup(!joinGroup)}
              className="nav-link btn btn-primary text-white d-flex justify-content-center align-items-center"
            >
              <FaUserPlus></FaUserPlus>
              <div className="ms-1">Join Group</div>
            </button>
          ) : (
            <button
              onClick={() => setJoinGroup(!joinGroup)}
              className="nav-link btn border text-dark d-flex justify-content-center align-items-center"
            >
              <FaSignOutAlt></FaSignOutAlt>
              <div className="ms-1">Leave Group</div>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FeedNav;
