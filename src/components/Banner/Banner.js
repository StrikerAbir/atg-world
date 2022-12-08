import React from 'react';
import banner from '../../assets/images/Rectangle 2.png'
import bannerShadow from '../../assets/images/Rectangle 3 (1).png'
import './Banner.css'
const Banner = () => {
    return (
      <div className="position-relative">
        <img className="bannerImg w-100" src={banner} alt="" />
        <img
          className="bannerImg w-100 position-absolute zIndex"
          src={bannerShadow}
          alt=""
        />
        <div className='position-absolute zIndex text bottom-0'>
          <h2 className="text-white">Computer Engineering</h2>
          <p className="text-white">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    );
};

export default Banner;