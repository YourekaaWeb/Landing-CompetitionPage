"use client";

import Slider from "react-slick";
// import testimonial from "@/data/testimonial";
import Image from "next/image";

const testimonial = [
  {
    phase: "Phase 1",
    title: "Submission & Social Sharing",
    text: "Submit your entry on Instagram and Facebook using the #DiscoverwithYourekaa hashtag Encourage likes, comments, and shares to support their entry."
  },
  {
    phase: "Phase 2",
    title: "Review of submissions",
    text: "Submitted entries will be reviewed and successful participants will make it to the next stage of public voting. (The general public will vote and decide who makes it to the final stage)."
  },
  {
    phase: "Phase 3",
    title: "Judging of submissions",
    text: "  The finalists who made it through public voting will have their works judged by a panel of judges comprising experienced creatives. Submissions will be judged"
  }
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {testimonial.slice(0, 4).map((item) => (
          <div className="item" key={item.phase}>
            <div className="feedback-block-eleven">
              <small className="py-5 pl-4 text-center">{item.phase}</small>
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="tx-dark m0">{item.title}</h3>
                  {/* <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul> */}
                </div>
                {/* <img src="/images/icon/icon_112.svg" alt="" width={50} /> */}
              </div>
              <p className="tx-dark">{item.text}</p>
              {/* <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
                <Image
                  width={60}
                  height={60}
                  src={item.image}
                  alt="tesimonial avatar"
                  className="rounded-circle"
                />
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
