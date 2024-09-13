"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const prizeList = [
  {
    icon: "./images/gallery/competitionsImages/prize-img1.png",
    title: "Top 10 submissions will be on Yourekaa explore page."
  },
  {
    icon: "./images/gallery/competitionsImages/prize-img1.png",
    title: "Opportunities to collaborate with builders and inventors."
  },
  {
    icon: "./images/gallery/competitionsImages/prize-img1.png",
    title: "Be a part of our community, work on more exciting projects."
  }
];

const Prizes = () => {
  return (
    <>
      {prizeList.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6 mt-65">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              <p className="m0">{feature.subtitle}</p>
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default Prizes;
