import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid custom-section-size custom-header-bg">
      <div className="row vh-100 d-flex align-items-center">
        <div className="col-md-6 ms-0 ms-md-5">
          <h1 className="custom-header-title">A Virtual Metaverse</h1>
          <p className="custom-header-paragraph">
            This is A <span>Metaverse Space</span> For Business People
          </p>
          <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
