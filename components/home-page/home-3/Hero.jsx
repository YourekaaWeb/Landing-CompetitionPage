"use client";

import Image from "next/image";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              {/* //fw-500 tx-dark */}
              <h1 className="hero-heading">Battle of the Arts.</h1>
              {/* <p className="text-lg tx-dark mb-10 pt-35 lg-pt-20 lg-mb-20">
                Show the world what you can do!
              </p> */}
              <p className="tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                You fill up an empty canvas with wonders, the rainbow looks at
                your painting in awe, the Statue of Liberty would be more
                beautiful if you sculpted it, the birds envy your voice, your
                pen does magnificent things when it kisses a note, you are
                creatively excellent in whatever you do!
              </p>
              <div className="d-lg-flex align-items-center">
                <div
                  // href="#"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>
                    Show the world <br /> what you can do!
                  </span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </div>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#resgistration-form-ref" className="fw-500 tran3s">
                    Enlist Now!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 position-relative h-50">
            {/* <div className="position-absolute w-100"> */}{" "}
            {/* <img
              src="/images/media/img_59.jpg"
              alt=""
              style={{ position: "absolute", top: -40, right: -15 }}
            /> */}
            {/* <img
              src="/images/media/img_59.jpg"
              alt=""
              style={{ position: "absolute", bottom: 70, left: -100 }}
            /> */}
            {/* <img src="/images/media/img_59.jpg" alt="" /> */}
            {/* </div> */}
            <div className="bg-black  h-50">
              <h3 className="text-white text-start p-4 fw-300 fs-2 ">
                Theme: <br /> Fractured Beauty
              </h3>
            </div>
            <Image
              width={490}
              height={942}
              layout="responsive"
              // src="/images/gallery/competitionsImages/BOA1.gif"
              src="/images/gallery/competitionsImages/yourekaaCraft.svg"
              alt="img"
              className="lazy-img w-100 h-50 position-relative"
              unoptimized={true}
              loading="eager"
            />
            <div className=" bg-black p-3 bottom-10 mt-[3rem] ">
              {" "}
              <Countdown targetDate="2024-11-31T00:00:00" />
            </div>
          </div>

          {/* End col-6 */}

          {/* <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            // data-aos="fade-left"
          > */}
          {/* <div className="image-holder zn2 d-inline-block  sm-mt-60"> */}
          {/* <img
                src="/images/assets/bg-12.png"
                alt="img"
                className="lazy-img"
              /> */}

          {/* <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>120k+</h4>
                <p>Online Videos</p>
              </div> */}
          {/* <div
            className="card-style card-two d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h4>200+</h4>
            <p>Categories</p>
          </div> */}

          {/* <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h5>80k+ Students</h5>
                <div className="avatar d-flex align-items-center">
                  <img src="/images/media/img_59.jpg" alt="" />
                  <img src="/images/media/img_60.jpg" alt="" />
                  <img src="/images/media/img_61.jpg" alt="" />
                  <img src="/images/media/img_62.jpg" alt="" />
                  <span className="avatar_image avatar_fallback">
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </div>
              </div> */}
          {/* 
              <img
                // src="/images/shape/shape_146.svg"
                src="/images/gallery/competitionsImages/monsterIcon.png"
                alt="shape"
                className="elements"
                style={{
                  top: -200,
                  width: "100px",
                  height: "100px",
                  right: -220
                }}
              /> */}
          {/* <img
                // src="/images/shape/shape_146.svg"
                src="/images/gallery/competitionsImages/monsterIcon.png"
                alt="shape"
                className="elements"
                style={{
                  top: 590,
                  width: "100px",
                  height: "100px",
                  right: -10
                }}
              /> */}
          {/* <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              /> */}
          {/* </div> */}
          {/* <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              /> */}
          {/* </div> */}
        </div>
        {/* End col-6 */}
        {/* </div> */}
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
