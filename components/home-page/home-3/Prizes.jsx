"use client";
import React from "react";

const PromoSection = () => {
  return (
    <div className="promoSection">
      <div className="cardContainer">
        <div className="card cardYellow">
          <div className="cardContent">
            <p className="cardText text-black">
              Over 400k bounty up for grabs!
            </p>
          </div>
        </div>
        <div className="card cardBlack">
          <div className="cardContent">
            <p className="cardText">
              The top 6 warriors get featured on our socials
            </p>
          </div>
        </div>
        <div className="card cardYellow">
          <div className="cardContent">
            <p className="cardText text-black">
              Top 3 warriors get featured in Yourekaa HIGH series
            </p>
          </div>
        </div>
        <div className="card cardBlack">
          <div className="cardContent">
            <p className="cardText">
              Join other contests & experiments in the community
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
