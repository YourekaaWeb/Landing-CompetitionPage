"use client";
import React from "react";

const PromoSection = () => {
  return (
    <div className="promoSection">
      <div className="cardContainer">
        <div className="card cardYellow">
          <div className="cardContent">
            <p className="cardText text-black">400k Cash Prizes to be Won!</p>
          </div>
        </div>
        <div className="card cardBlack">
          <div className="cardContent">
            <p className="cardText">
              Top 10 Submissions on Yourekaa Explore Page!
            </p>
          </div>
        </div>
        <div className="card cardYellow">
          <div className="cardContent">
            <p className="cardText text-black">
              Be a Part of Our Creative Community & Collaborate!
            </p>
          </div>
        </div>
        <div className="card cardBlack">
          <div className="cardContent">
            <p className="cardText">
              Work with Inventors and Builders on Exciting Projects!
            </p>
          </div>
        </div>
      </div>
      <div className="register">
        <a href="#resgistration-form-ref" className="registerLink">
          Enlist now
        </a>
      </div>
    </div>
  );
};

export default PromoSection;
