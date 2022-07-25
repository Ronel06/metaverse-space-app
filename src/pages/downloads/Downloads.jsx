import React from 'react'
import icon1 from '../../assets/images/landing/download/android.png';
import icon2 from '../../assets/images/landing/download/windows.png';
import icon3 from '../../assets/images/landing/download/apple.png';


import './Downloads.css'

const Downloads = () => {
  return (
    <div className="container-fluid">
         <div className="custom-section-size">
             <div className="row vh-100 custom-header-bgdownload d-flex flex-column justify-content-center">
             <div className="col-md-6 ms-0 ms-md-5 ">
              <p className="custom-download-header p-0 m-0">Build An</p>
              <h1 className="custom-download-sub mb-5 p-0 m-0">
                Imposible World
              </h1>
              <button className="btn btn-info text-white px-5 py-2 custom-header-btn">
                LEARN MORE
              </button>
            </div>
             </div>
             
         </div>

         <div className="custom-section1-size">
             <div className="row custom-section-bgdownload d-flex flex-row justify-content-end align-items-center">
                   <div className="custom-section1-label text-center w-50 ps-5 pe-5">
                      <h1 className="w-75 ps-3 pe-3 mb-4">A Virtual <span className="light-text">Metaverse</span></h1>
                      <p className="w-75 ps-3 pe-3">The HyperVerse is a virtual metaverse comprising of millions of planets. In the HyperVerse, players, also known as voyagers, can connect with friends, experience different cultures and lifestyles, create tokenized items, start businesses, and explore the universe. HyperVerse provides a fair chance to every resident in the galaxy thanks to VerseDAO.</p>
                   </div>
             </div> 
         </div>

         
         <div className="custom-section2-size">
         <div className="row vh-100 custom-section-bgdownload2 d-flex flex-row align-items-center">
            <div className="col">
                   <div className="div-text2 text-center ps-5 pe-5">
                      <h1 className="ps-3 pe-3 mb-4">A Virtual <span className="light-text">Metaverse</span></h1>
                      <p className="ps-3 pe-3">The HyperVerse is a virtual metaverse comprising of millions of planets. In the HyperVerse, players, also known as voyagers, can connect with friends, experience different cultures and lifestyles, create tokenized items, start businesses, and explore the universe. HyperVerse provides a fair chance to every resident in the galaxy thanks to VerseDAO.</p>
                   </div>
             </div> 
             <div className="col ">
                   <div className="div-download d-flex justify-content-center align-items-center">
                      <div className="div-icons row d-flex flex-row  w-auto h-auto">
                        <img src={icon1}></img>
                        <img src={icon2}></img>
                        <img src={icon3}></img>
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
      
        
    </div>
  )
}

export default Downloads