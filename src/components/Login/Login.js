import React from "react";
import "./Login.css";
import log from "../../assets/images/Group 3.png";
import { FaEye, FaSearch } from "react-icons/fa";
import fb from '../../assets/images/f_logo_RGB-Blue_1024.png'
import google from '../../assets/images/search.png'
const Login = () => {
  return (
    // <!-- Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modalMeasure ">
        <div className="d-flex justify-content-end w-100">
          <button
            type="button"
            class="btn-close bg-light rounded-circle mb-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-content">
          <div class="modal-header bgColor">
            <p class="text-success m-0" id="loginModalLabel">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div class="modal-body p-4">
            <div className="d-flex">
              <div className="w-50">
                <h3>Sign In</h3>
                <form
                  className="position-relative border border-2 inputBg mt-3"
                  role="search"
                >
                  <input
                    className=" ps-4 py-2 w-100 border-0 border-bottom inputBg"
                    type="email"
                    placeholder="Email"
                    aria-label="Search"
                  />
                  <div className="position-absolute pt-2 gap" type="submit">
                    <FaEye></FaEye>
                  </div>
                  <div>
                    <input
                      className=" ps-4 w-100 py-2 border-0 inputBg"
                      type="search"
                      placeholder="Password"
                      aria-label="Search"
                    />
                  </div>
                </form>
                <button className="w-100 py-2 my-3 btn btn-primary border-0 rounded-pill">
                  Sign In
                </button>
                <button className="w-100 py-1 mt-3 btn btn-light border-0">
                  <img src={fb} alt="" /> Sign up with Facebook
                </button>
                <button className="w-100 py-1 mt-3 btn btn-light border-0">
                  <img src={google} alt="" /> Sign up with Google
                </button>
                <p className="text-center mt-3">Forgot Password?</p>
              </div>
              <div className="w-50 d-flex flex-column justify-content-end">
                <a
                  className="text-black text-decoration-none text-end"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  Don't have an account yet?{" "}
                  <span className="text-primary">Create new for free!</span>
                </a>
                <img src={log} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
