import React from "react";

import image1 from '../../assets/images/landing/content/image1.png';
import image3 from '../../assets/images/landing/content/image3.png';

import video1 from '../../assets/images/landing/content/login.mp4';
import video2 from '../../assets/images/landing/content/about1.mp4';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../../assets/images/landing/header/bg.png";

import image_1 from '../../assets/images/landing/content/mg1.png';
import image_2 from "../../assets/images/landing/content/mg2.png";
import image_3 from "../../assets/images/landing/content/mg3.png";
import image_4 from "../../assets/images/landing/content/mg4.png";
import image_5 from "../../assets/images/landing/content/mg5.png";
import image_6 from "../../assets/images/landing/content/mg5.png";

import "./Home.css";

const Home = () => {
  return (

    <div className="container-fluid" style={{ margin: "0px" }}>
      <div className="ratio ratio-16x9  " >
        <video src={video1} autoPlay={true} loop={true} ></video>
        <div className="custom-section-size">
          <div className="row vh-100 d-flex ">
            <div className="col-md-6 ms-0 ms-md-5">
              <h1 className="custom-header-title">A Virtual Metaverse</h1>
              <p className="custom-header-paragraph">
                This is A <span>Metaverse Space</span> For Business People
              </p>
              <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
                LEARN MORE
              </button>
              <div className="container-fluid p-0 m-0">
                <div className="custom-section-size ">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" custom-section-size">
        <div class="ratio ratio-16x9 m-0 p-0" >
          <video src={video2} autoPlay={true} loop={true} ></video>
          <div className="row vh-100 d-flex align-items-center">
            <div className="col-md-6 offset-md-6">
              <div className="custom-about-panel p-5 text-white">
                <h1 className="custom-about-title">About Us</h1>
                <div className="about-half-line"></div>
                <div className="about-full-line"></div>
                <p className="custom-about-sub">A Virtual Metaverse</p>
                <p className="custom-about-paragraph">
                  The HyperVerse is a virtual metaverse comprising of millions of
                  planets. In the HyperVerse, players, also known as voyagers, can
                  connect with friends, experience different cultures and
                  lifestyles, create tokenized items, start businesses, and
                  explore the universe. HyperVerse provides a fair chance to every
                  resident in the galaxy thanks to VerseDAO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-section-size">
        <div className="row vh-100 d-flex align-items-center custom-section-bg2">
          <div className="section-cards d-flex flex-row w-100 justify-content-center">

            <div className="card  text-center w-25 me-5">
              <div><img className="card-img-top" src={image3} alt="image1"/></div>
              <div className="card-body align-items-center">
                <h5 className="card-title  mb-3">Card title</h5>
                <div className="section-half-line"></div>
                <div className="section-full-line mb-4"></div>
                <p class="card-text  mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
                SEE MORE
                 </button> 
              </div>  
         
            </div>

            <div className="card  text-center w-25 me-5">
              <div><img className="card-img-top" src={image1}  alt="image2"/></div>
              <div className="card-body align-items-center">
                <h5 className="card-title  mb-3">Card title</h5>
                <div className="section-half-line"></div>
                <div className="section-full-line mb-4"></div>
                <p className="card-text  mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
               SEE MORE
              </button> 
              </div>  
            </div>

            <div className="card  text-center w-25 me-5">
              <div><img className="card-img-top" src={image3}  alt="image3"/></div>
              <div className="card-body align-items-center">
                <h5 className="card-title  mb-3">Card title</h5>
                <div className="section-half-line"></div>
                <div className="section-full-line mb-4"></div>
                <p className="card-text  mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
                SEE MORE
              </button> 
              </div>  
            </div>

          </div>
        </div>
      </div>
 
      <div className="custom-section-size custom-contact-bg">
        <div className="col-md-10 offset-md-1 vh-100 d-flex align-items-center">
          <div className="container-fluid custom-contact-panel p-5">
            <h1 className="custom-contact-title">Contact Us</h1>
            <div className="contact-half-line"></div>
            <div className="contact-full-line"></div>
            <div className="row my-md-5 my-0 pt-md-5 pt-0">
              <div className="col-md-6 my-5 my-md-0">
                <p>
                  You'll find us at all hours on Discord and other social media
                  platform.
                </p>
                <p>You can also reach us through the usual channels.</p>
                <br />
                <p>
                  You'll find us at all hours on Discord and other social media
                  platform.
                </p>
                <p>You can also reach us through the usual channels.</p>
                <br />
                <button className="btn btn-info text-white px-5 py-2">
                  GET IN TOUCH
                </button>
              </div>
              <div className="col-md-6 py-5 py-md-0">
                <div className="form-group d-flex align-items-start mb-3">
                  <label htmlFor="name" className="custom-contact-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control fs-5"
                    id="name"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group d-flex align-items-start mb-3">
                  <label htmlFor="email" className="custom-contact-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control fs-5"
                    id="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group d-flex align-items-start mb-3">
                  <label htmlFor="message" className="custom-contact-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <button className="btn btn-info text-white px-5 py-2 custom-btn-contact">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>   

     <div className="container-carousel m-0 p-0">
          <Carousel
            swipeable
            draggable
            arrows={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6  ,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            ssr={true} // means to render carousel on server-side.
            infinite
            autoPlay
            autoPlaySpeed={1000}
            keyBoardControl
            transitionDuration={1000}
            containerClass="carousel-container py-5 m-0 p-0"
          >
            <div className=" custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_1} alt="images" className="img-fluid" />
            </div>
            <div className=" custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_2} alt="images" className="img-fluid" />
            </div>
            <div className="custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_3} alt="images" className="img-fluid" />
            </div>
            <div className="custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_4} alt="images" className="img-fluid" />
            </div>
            <div className="custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_5} alt="images" className="img-fluid" />
            </div>
            <div className="custom-image h-100 d-flex align-items-center justify-content-center">
              <img src={image_6} alt="images" className="img-fluid" />
            </div>
          </Carousel>
        </div> 

    </div>





  );
};

export default Home;
