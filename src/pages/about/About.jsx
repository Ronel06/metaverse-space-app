import React from "react";
import "./About.css";
import AboutCard from "./card";

const About = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="custom-section-size custom-about-header-bg d-flex align-items-center justify-content-center">
        <div className="col-10 text-center">
          <div className="custom-about-panel-bg py-5">
            <div className="bg-info d-inline-block px-5 py-2 fs-5 text-white">
              <span className="fw-lighter">VIRTUAL</span>&nbsp;
              <span className="fw-bold">EXPERIENCE</span>
            </div>
            <div className="py-5">
              <h1 className="h1 custom-about-h1 text-white fw-light">
                Enter An Impossible World
              </h1>
              <h1 className="h1 custom-about-h1 text-white fw-light">
                Link With <span className="fw-normal">The Real-Life</span>
              </h1>
            </div>
            <button className="btn btn-transparent border border-white fs-4 px-5 text-white fw-normal">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="custom-section-size custom-about-header-bg2 d-flex align-items-center justify-content-center py-5">
        <div className="col-md-10 text-center custom-about-panel-2 py-5 mx-2">
          <div className="w-md-75 mx-auto">
            <h1 className="text-white custom-about-title-2">About Us</h1>
            <div className="about-title-half-line"></div>
            <div className="about-title-full-line"></div>
          </div>
          <h1 className="custom-about-title-2 text-white fw-normal text-center my-5">
            A Virtual Metaverse
          </h1>
          <p className="fs-md-5 fs-6 text-white w-75 mx-auto mb-5 custom-about-paragraph">
            The HyperVerse is a virtual metaverse comprising of millions of
            planets. In the HyperVerse, players, also known as voyagers, can
            connect with friends, experience different cultures and lifestyles,
            create tokenized items, start businesses, and explore the universe.
            HyperVerse provides a fair chance to every resident in the galaxy
            thanks to VerseDAO.
          </p>
          <a
            href="/"
            className="fw-normal text-white fs-md-3 fs-4 text-decoration-none custom-about-link"
          >
            SEE MORE
          </a>
        </div>
      </div>
      <div className="custom-section-size custom-about-header-bg3  d-flex align-items-center justify-content-center">
        <div className="w-100 py-5 my-5">
          <div className="w-md-75 mx-auto text-center">
            <h1 className="text-white custom-about-title-2">Our Features</h1>
            <div className="about-title-half-line"></div>
            <div className="about-title-full-line"></div>
          </div>
          <div className="text-center py-5 w-100">
            <div className="d-flex flex-wrap align-items-center justify-content-around">
              <AboutCard header="Header Text 1" sub="Sub Text 1" />
              <AboutCard header="Header Text 2" sub="Sub Text 2" />
              <AboutCard header="Header Text 3" sub="Sub Text 3" />
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-around">
              <AboutCard header="Header Text 4" sub="Sub Text 4" />
              <AboutCard header="Header Text 5" sub="Sub Text 5" />
              <AboutCard header="Header Text 6" sub="Sub Text 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;