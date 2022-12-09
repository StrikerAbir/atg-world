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
            class="btn-close bg-light rounded-circle mb-2 d-none d-lg-block"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-content">
          <div class="modal-header bgColor d-none d-lg-block">
            <p class="text-success m-0" id="loginModalLabel ">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div class="modal-body p-4">
            <div className="d-flex">
              <div className="w-lg-50">
                <div className="d-flex justify-content-between align-items-center d-lg-none">
                  <h3>Sign In</h3>
                  <button
                    type="button"
                    class="btn-close bg-light rounded-circle mb-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
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
                <button className="d-none d-lg-block w-100 w-25 py-2 my-3 btn btn-primary border-0 rounded-pill">
                  Sign In
                </button>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="d-lg-none w-25 py-2 my-3 btn btn-primary border-0 rounded-pill">
                    Sign In
                  </button>
                  <div className="d-lg-none">
                    <a
                      className="text-black text-decoration-none text-end"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                    >
                      or? <span className="text-primary">Create Account!</span>
                    </a>
                  </div>
                </div>
                <button className="w-100 py-1 mt-3 btn btn-light border">
                  <img src={fb} alt="" /> Sign in with Facebook
                </button>
                <button className="w-100 py-1 mt-3 btn btn-light border">
                  <img src={google} alt="" /> Sign in with Google
                </button>
                <p className="text-center mt-3">Forgot Password?</p>
              </div>
              <div className="w-50 d-flex flex-column justify-content-end d-lg-block d-none">
                <a
                  className="text-black text-decoration-none text-end"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  <p className="text-center">
                    Don't have an account yet?{" "}
                    <span className="text-primary">Create new for free!</span>
                  </p>
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
