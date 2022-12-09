import React from "react";
import n1 from "../../../../../assets/images/Rectangle 5.png";
import n2 from "../../../../../assets/images/Rectangle 5 (1).png";
import n3 from "../../../../../assets/images/Rectangle 5 (2).png";
import user1 from "../../../../../assets/images/Rectangle 3 (2).png";
import user2 from "../../../../../assets/images/Rectangle 3 (3).png";
import user3 from "../../../../../assets/images/Rectangle 3 (4).png";
import Article from "../../../../../assets/images/✍️ Article.png";
import Education from "../../../../../assets/images/🔬️ Education.png";
import Meetup from "../../../../../assets/images/🗓️ Meetup.png";
import Job from "../../../../../assets/images/💼️ Job.png";
import NewsCard from "./NewsCard/NewsCard";
import imgBtn from "../../../../../assets/images/Group 6.png";

import {
  FaEllipsisH,
  FaEye,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaShareAlt,
} from "react-icons/fa";

const Left = () => {
  const posts = [
    {
      img: n1,
      category: Article,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      poster: user1,
      view: "1.4k",
      name: "Sarthak Kamra",
    },
    {
      img: n2,
      category: Education,
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      poster: user2,
      view: "1.4k",
      name: "Sarthak Kamra",
    },
  ];
  return (
    <div className="me-lg-4">
      <div className="d-md-none">
        <button className="btn p-0 rounded-circle position-fixed zIndex bottom-0 end-0 mb-5 me-5 btnMargin">
          <img className="rounded-circle" src={imgBtn} alt="" />
        </button>
      </div>
      {posts.map((post) => (
        <NewsCard post={post} key={Math.random()}></NewsCard>
      ))}
      <div className="card mb-3">
        <img src={n3} className="card-img-top" alt="..." />
        <div className="card-body">
          <img src={Meetup} alt="" className="mb-2" />
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h5>
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
          <div>
            <div className="d-flex mb-3">
              <div className="d-flex align-items-center">
                <FaRegCalendarCheck></FaRegCalendarCheck>
                <p className="fw-bold mb-0">
                  <span>Fri, 12 Oct, 2018</span>
                </p>
              </div>
              <div className="d-flex align-items-center ms-5">
                <FaMapMarkerAlt></FaMapMarkerAlt>
                <p className="fw-bold mb-0">
                  <span>Ahmedabad, India</span>
                </p>
              </div>
            </div>
            <button className="w-100 text-danger btn border mb-3">
              Visit Website
            </button>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex align-items-center">
              <img src={user3} alt="" />
              <p className="m-0 ms-2 fw-bold">Ronal Jones</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0">
                <FaEye></FaEye>
                <span className="ms-1">1.4k views</span>
              </p>
              <button className="btn btn-light ms-5">
                <FaShareAlt></FaShareAlt>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <img src={Job} alt="" className="mb-2" />
          <div className="d-flex justify-content-between">
            <h5 className="card-title">Software Developer</h5>
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
          <div>
            <div className="d-flex mb-3">
              <div className="d-flex align-items-center">
                <FaRegCalendarCheck></FaRegCalendarCheck>
                <p className="fw-bold mb-0">
                  <span>Innovaccer Analytics Private Ltd.</span>
                </p>
              </div>
              <div className="d-flex align-items-center ms-5">
                <FaMapMarkerAlt></FaMapMarkerAlt>
                <p className="fw-bold mb-0">
                  <span>Nodia, India</span>
                </p>
              </div>
            </div>
            <button className="w-100 text-success btn border mb-3">
              Apply on Timesjobs
            </button>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex align-items-center">
              <img src={user3} alt="" />
              <p className="m-0 ms-2 fw-bold">Ronal Jones</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0">
                <FaEye></FaEye>
                <span className="ms-1">1.4k views</span>
              </p>
              <button className="btn btn-light ms-5">
                <FaShareAlt></FaShareAlt>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
