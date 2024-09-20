import Link from "next/link";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import Image from "next/image";

const HowToStartBlock = () => {
  return (
    // <div className="fancy-feature-fortyThree position-relative pt-130 pb-65 lg-pt-80 reg-form-section">
    <div className="reg-form-section px-10" id="resgistration-form-ref">
      <div className="d-flex justify-content-center">
        <div className="d-flex reg-flex-container">
          <div
            className="reg-form-info col-xl-6 col-md-6 ms-auto w-40 "
            // data-aos="fade-right"
            style={{
              backgroundColor: "#ff0"
            }}
          >
            <div>
              <h5>Yourekaa Battle of the Arts.</h5>
              <p>Show the world what you can do!</p>
              <div className="reg-form-info-img">
                <div
                  className=" reg-form-info-whiteBg bg-white  mx-auto px-4 py-5"
                  style={{
                    borderRadius: "0.4rem",
                    fontSize: "1rem",
                    boxShadow: " 0 4px 15px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <p>
                    You fill up an empty canvas with wonders, the rainbow looks
                    at your painting in awe, the Statue of liberty would be more
                    beautiful if you sculpted it, the birds envy your voice,
                    your pen does magnificent things when it kisses a note, you
                    are creatively excellent in whatever you do!
                  </p>
                </div>
              </div>

              <div
                className="mt-10 "
                style={{
                  paddingLeft: "1rem",
                  display: "grid",
                  placeItems: "center",
                  justifyContent: "center"
                }}
              >
                <Link
                  href="mailto:hello@yourekaa.com"
                  style={{ textDecoration: "underline" }}
                  className="pb-1"
                >
                  hello@yourekaa.com
                </Link>
                <div className="d-flex">
                  <span>
                    {" "}
                    <Image
                      src="/images/icon/x-icon.png"
                      width={28}
                      height={28}
                    ></Image>
                  </span>
                  <span>
                    <Image
                      src="/images/icon/instagram-icon.png"
                      width={40}
                      height={30}
                    ></Image>
                  </span>

                  <span></span>
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div
            // className="w-50"
            className=" bg-white reg-form-outer-wt-wrapper"

            // data-aos="fade-left"
          >
            <RegistrationForm />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowToStartBlock;
