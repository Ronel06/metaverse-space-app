import React from "react";
import image1 from '../../assets/images/landing/content/image1.png';
import "./Home.css";

const Home = () => {
  return (

    <div className="container-fluid">
      <div className="custom-section-size">
      <div className="row vh-100 d-flex align-items-center  custom-header-bg">
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

    <div className="custom-section-size">
      <div className="row vh-100 d-flex align-items-center custom-header-bg2">
       <div className="section-cards d-flex flex-row justify-content-center">
          <div className="card text-center w-25">
              <div><img class="card-img-top" src={image1}></img></div> 
               <div className="card-body align-items-center">
               <h5 class="card-title">Card title</h5>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
          </div>
       </div>
      </div>
    </div>
    


  </div>
  );
};

export default Home;
