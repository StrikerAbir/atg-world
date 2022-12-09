import React from "react";
import "./Login.css";
import log from "../../assets/images/Group 3.png";
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
                <h3>Create Account</h3>
              </div>
              <div className="w-50 d-flex flex-column justify-content-end">
                <a
                  className="text-black text-decoration-none text-end"
                  href="/"
                >
                  Already have an account?{" "}
                  <span className="text-primary">Sign In</span>
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
