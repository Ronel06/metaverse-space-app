import React from "react";
import "./Register.css";
import logo1 from "../../assets/images/landing/register/facebook.png";
import logo2 from "../../assets/images/landing/register/google.png";
import logo3 from "../../assets/images/landing/register/apple.png";

const Register = () => {
  return (
    <div className="container-fluid custom-register-bg custom-section-size">
      <div className="row py-3">
        <div className="col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between flex-column">
          <p></p>
          <h1
            className="custom-title-h1 ms-md-0 ms-lg-0 ms-0 pb-5"
            data-text="Account"
          >
            Create An
          </h1>
          <h2
            className="custom-title-h2 ms-md-5 pb-5"
            data-text="THIS IS A METAVERSE SPACE FOR BUSINESS PEOPLE"
          >
            meta<span>verse</span>
          </h2>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="card shadow my-md-5">
            <div className="card-body">
              <div className="col-md-10 offset-md-1 py-5">
                <div className="form-group mb-3">
                  <label
                    htmlFor=""
                    className="text-center d-block mb-1 fs-5 fw-bold"
                  >
                    WHAT'S YOUR <span className="fw-bolder">NAME?</span>
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
                    WHAT'S YOUR <span className="fw-bolder">EMAIL?</span>
                  </label>
                  <input
                    type="email"
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
                <div className="form-group mb-3">
                  <label
                    htmlFor=""
                    className="text-center d-block mb-1 fs-5 fw-bold"
                  >
                    CONFIRM YOUR <span className="fw-bolder">PASSWORD</span>
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
                    Receive news, special offers, feedback surveys, and playtest
                    invitations from metaverse.
                  </label>
                </div>
                <div className="py-5">
                  <p className="text-center custom-text-sm fw-bold">
                    YOU CAN ALSO CREATE AN ACCOUNT WITH
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary px-md-3 px-xl-4 me-2">
                      <img
                        src={logo1}
                        alt="facebook"
                        className="img-fluid"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </button>
                    <button className="btn btn-white border px-md-3 px-xl-4 me-2">
                      <img
                        src={logo2}
                        alt="google"
                        className="img-fluid"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </button>
                    <button className="btn btn-dark px-md-3 px-xl-4 me-2">
                      <img
                        src={logo3}
                        alt="apple"
                        className="img-fluid"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <button className="text-white fs-3 px-5 custom-btn-radius btn btn-dark">
                    SIGN UP
                  </button>
                </div>
                <div className="mt-5">
                  <p className="text-center fs-4 text-muted">
                    ALREADY HAVE AN ACCOUNT ? <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;