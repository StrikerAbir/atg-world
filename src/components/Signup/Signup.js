import React from "react";
import log from "../../assets/images/Group 3.png";
import { FaEye, FaSearch } from "react-icons/fa";
import fb from "../../assets/images/f_logo_RGB-Blue_1024.png";
import google from "../../assets/images/search.png";
const Signup = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modalMeasure ">
          <div className="d-none d-lg-flex justify-content-end w-100">
            <button
              type="button"
              class="btn-close bg-light rounded-circle mb-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-content">
            <div class="modal-header bgColor d-none d-lg-block">
              <p class="text-success m-0" id="signupModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
            </div>
            <div class="modal-body p-4">
              <div className="d-flex">
                <div className="w-lg-50 w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Create Account</h3>
                    <button
                      type="button"
                      class="btn-close bg-light rounded-circle mb-2 d-lg-none"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form
                    className="position-relative border border-2 inputBg mt-3"
                    role="search"
                  >
                    <div className="d-flex w-100 border-bottom border-">
                      <div className="w-50 border-end">
                        <input
                          className="ps-4 py-2 w-100 border-0 inputBg"
                          type="search"
                          placeholder="First Name"
                          aria-label="Search"
                        />
                      </div>
                      <div className="w-50">
                        <input
                          className="ps-4 py-2 w-100 border-0 inputBg"
                          type="search"
                          placeholder="Last Name"
                          aria-label="Search"
                        />
                      </div>
                    </div>
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
                        className=" ps-4 w-100 py-2 border-0 border-bottom inputBg"
                        type="search"
                        placeholder="Password"
                        aria-label="Search"
                      />
                    </div>

                    <div>
                      <input
                        className=" ps-4 w-100 py-2 border-0 inputBg"
                        type="search"
                        placeholder="Confirm Password"
                        aria-label="Search"
                      />
                    </div>
                  </form>
                  <button className="d-none d-lg-block w-100 py-2 my-3 btn btn-primary border-0 rounded-pill">
                    Create Account
                  </button>
                  <div className="d-lg-block d-flex justify-content-between align-items-center">
                    <button className="d-lg-none py-2 my-3 btn btn-primary border-0 rounded-pill">
                      Create Account
                    </button>
                    <div className="d-lg-none">
                      <a
                        className="text-black text-decoration-none text-end"
                        href="/"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        or? <span className="text-primary">Sign In</span>
                      </a>
                    </div>
                  </div>
                  <button className="w-100 py-1 mt-3 btn btn-light border">
                    <img src={fb} alt="" /> Sign up with Facebook
                  </button>
                  <button className="w-100 py-1 mt-3 btn btn-light border">
                    <img src={google} alt="" /> Sign up with Google
                  </button>
                </div>
                <div className="w-50 d-flex flex-column justify-content-end d-none d-lg-block">
                  <a
                    className="text-black text-decoration-none text-end"
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    <p className="text-center">
                      Already have an account?{" "}
                      <span className="text-primary">Sign In</span>
                    </p>
                  </a>
                  <img src={log} alt="" />
                  <p className="text-center mt-3">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
              <p className="text-center mt-3 d-lg-none">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
