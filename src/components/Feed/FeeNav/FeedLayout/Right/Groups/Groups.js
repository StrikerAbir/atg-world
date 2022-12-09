import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import pic from '../../../../../../assets/images/Rectangle 6.png'
const Groups = () => {
    return (
      <div>
        <p class="fw-bold mt-5">
          <FaThumbsUp></FaThumbsUp> RECOMMENDED GROUPS
        </p>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <img src={pic} alt="" />
            <p className="m-0 ms-2">Leisure</p>
          </div>
          <button className="rounded-pill border-0">follow</button>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <img src={pic} alt="" />
            <p className="m-0 ms-2">Activism</p>
          </div>
          <button className="rounded-pill border-0">follow</button>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <img src={pic} alt="" />
            <p className="m-0 ms-2">MBA</p>
          </div>
          <button className="rounded-pill border-0">follow</button>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <img src={pic} alt="" />
            <p className="m-0 ms-2">Philosophy</p>
          </div>
          <button className="rounded-pill border-0">follow</button>
            </div>
            <p className='text-end text-primary'>see more...</p>
      </div>
    );
};

export default Groups;