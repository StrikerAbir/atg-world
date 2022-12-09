import React from "react";
import { FaExclamationCircle, FaMapMarkerAlt, FaPen } from "react-icons/fa";

const Right = () => {
  return (
    <div className="ms-5">
      <div className="ps-4">
        <div className="mt-5 d-flex justify-content-between align-items-center border border-top-0 border-start-0 border-end-0 ">
          <div className="d-flex justify-content-center align-items-center pb-2">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            <input
              type="text"
              class="border-0"
              placeholder="Location"
              defaultValue="Nodia, India"
            ></input>
          </div>
          <FaPen></FaPen>
        </div>
        <div className='mt-4 feedLink d-flex'>
            <FaExclamationCircle className='w-25 mt-1'></FaExclamationCircle>{" "}
          <p>
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right;
