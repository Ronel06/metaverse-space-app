import React from "react";

const AboutCard = ({ header, sub }) => {
  return (
    <div className="m-3">
      <div
        className="card shadow"
        style={{ width: "min(20rem, 60vw)", height: "min(20rem, 60vw)" }}
      >
        <div className="card-body"></div>
      </div>
      <div className="text-center mt-3">
        <h4>{header}</h4>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default AboutCard;