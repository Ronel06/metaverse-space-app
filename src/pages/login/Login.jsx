import React from "react";
import "./Login.css";
import logo from "../../assets/images/landing/login/logo.png";

const Login = () => {
  return (
    <div className="container-fluid custom-login-bg custom-section-size">
      <div className="row">
        <div className="col-md-4 offset-md-4 py-md-5">
          <h1 className="fw-light text-center py-4 py-md-0">
            THIS IS A METAVERSE SPACE FOR BUSINESS PEOPLE
          </h1>
          <div className="card shadow my-md-5">
            <div className="card-body">
              <h1 className="h1 text-center m-0 pt-1 pt-md-5 custom-login-h1">
                Log <span className="fw-bolder">In</span>
              </h1>
              <div className="col-md-10 offset-md-1 py-md-5 py-3">
                <div className="form-group mb-3">
                  <label
                    htmlFor=""
                    className="text-center d-block mb-1 fs-5 fw-bold"
                  >
                    WHAT'S YOUR <span className="fw-bolder">USERNAME?</span>
                  </label>
                  <input
                    type="text"
                    className="form-control text-center fs-5 border-0 custom-input-bg"
                  />
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor=""
                    className="text-center d-block mb-1 fs-5 fw-bold"
                  >
                    ENTER YOUR <span className="fw-bolder">PASSWORD</span>
                  </label>
                  <input
                    type="password"
                    className="form-control text-center fs-5 border-0 custom-input-bg"
                  />
                </div>
                <div className="form-check ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input custom-check-bg border-0 fs-5"
                  />
                  <label className="form-check-label fs-5" htmlFor="">
                    Keep me signed in.
                  </label>
                </div>
                <div className="text-center my-5">
                  <button className="text-white fs-3 px-5 custom-btn-radius btn btn-dark">
                    SIGN IN
                  </button>
                </div>
                <div className="mt-5 text-center">
                  <a href="/" className="text-decoration-none fs-4 text-muted">
                    DON'T HAVE AN ACCOUNT YET ? <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-md-flex align-items-end justify-content-end d-block pt-5 mt-5 text-end">
          <img src={logo} alt="logo" className="img-fluid mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Login;