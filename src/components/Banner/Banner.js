import React, { useContext } from 'react';
import { FaArrowRight, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { StateContext } from '../../App';
import banner from '../../assets/images/Rectangle 2.png'
import bannerShadow from '../../assets/images/Rectangle 3 (1).png'
import './Banner.css'
const Banner = () => {
  const { joinGroup, setJoinGroup } = useContext(StateContext);
    return (
      <div className="position-relative">
        <img className="bannerImg w-100" src={banner} alt="" />
        <img
          className="bannerImg w-100 position-absolute zIndex"
          src={bannerShadow}
          alt=""
        />
        <div className="position-absolute zIndex text bottom-0">
          <h2 className="text-white">Computer Engineering</h2>
          <p className="text-white">142,765 Computer Engineers follow this</p>
        </div>
        <div className="position-absolute zIndex container top-0 d-lg-none">
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-white fs-3">
              <FaArrowRight></FaArrowRight>
            </div>
            {!joinGroup ? (
              <button
                onClick={() => setJoinGroup(!joinGroup)}
                className="nav-link btn border text-white px-2 py-2"
              >
                <div className="ms-1">Join Group</div>
              </button>
            ) : (
              <button
                onClick={() => setJoinGroup(!joinGroup)}
                className="nav-link btn border text-white px-2 py-2"
              >
                <div className="ms-1">Leave Group</div>
              </button>
            )}
          </div>
        </div>
      </div>
    );
};

export default Banner;