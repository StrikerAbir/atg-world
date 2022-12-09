import React from "react";
import { FaEllipsisH, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ post }) => {
  const { img, title, description, view, poster, name, category } = post;
//   console.log(post);
  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <img src={category} alt="" className="mb-2" />
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-light ms-5 position-relative" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaEllipsisH></FaEllipsisH>
              </button>

              <ul className="dropdown-menu end-0">
                <li>
                  <a className="dropdown-item" href="/">
                    Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center">
            <img src={poster} alt="" />
            <p className="m-0 ms-2 fw-bold">{name}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="m-0">
              <FaEye></FaEye>
              <span className="ms-1">{view} views</span>
            </p>
            <button className="btn btn-light ms-5">
              <FaShareAlt></FaShareAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
