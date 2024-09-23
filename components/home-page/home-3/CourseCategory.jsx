"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

// const CourseCategory = () => {
const categories = [
  {
    skill: "Visual arts",
    examples: "digital, painting, sculpture, photography, etc",
    img: "/images/gallery/competitionsImages/visualArts2.png"
  },
  {
    skill: "Performing arts",
    examples: "music, dance, theater, spoken word, film etc",
    img: "/images/gallery/competitionsImages/music1.png"
  },
  {
    skill: "Literary arts",
    examples: "poetry, short stories, essays, etc",
    img: "/images/gallery/competitionsImages/literaryArts1.jpg"
  },
  {
    skill: "Gaming",
    examples:
      "adventure, Combat, Multiplayer battle arena, Alternate reality, etc",
    img: "/images/gallery/competitionsImages/gaming-img.jpg"
  },
  {
    skill: "Craftsmanship",
    examples: "wood, metal, clay, glass, etc.",
    img: "/images/gallery/competitionsImages/craft1.jpeg"
  },
  {
    skill: "Fashion ",
    examples:
      "streetwear Designers, Accessory Designers, Textile Designers, etc",
    img: "/images/gallery/competitionsImages/fashion-img.jpg"
  },
  {
    skill: "Digital media",
    examples: "video, animation, graphic design, etc.",
    img: "/images/gallery/competitionsImages/digital2.png"
  },
  {
    skill: "Unconventional materials",
    examples: "recycled materials, natural elements, etc",
    img: "/images/gallery/competitionsImages/unconventionArt-img.jpg"
  }
];

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

export default function CompetitionStages() {
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

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      const scrollAmount = containerRef.current.scrollWidth / categories.length;
      containerRef.current.scrollTo({
        left: currentIndex * scrollAmount,
        behavior: "smooth"
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carouselContainer ">
      <div className="carousel" ref={containerRef}>
        {categories.map((category, index) => (
          <div key={index} className="card">
            <Image
              src={category.img}
              alt={category.skill}
              width={300}
              height={200}
              className="cardImage"
            />
            <div className="cardContent">
              <h3>{category.skill}</h3>
              <p>{category.examples}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  {
    /* Second Div */
  }
  {
    /* <div className="stage-container">
                      <div className="card">
                        <small className="pb-3">Phase 2</small>
                        <h6>Review of submissions</h6>
                        <p>
                          Submitted entries will be reviewed and successful participants will
                          make it to the next stage of public voting. (The general public will
                          vote and decide who makes it to the final stage).
                        </p>
                      </div>
                    </div> */
  }

  {
    /* Third Div */
  }
  {
    /* <div className="stage-container">
                      <div className="card">
                        <small className="pb-3">Phase 3</small>
                        <h6>Judging of submissions</h6>
                        <p>
                          The finalists who made it through public voting will have their
                          works judged by a panel of judges comprising experienced creatives.
                          Submissions will be judged
                        </p>
                      </div>
                    </div> */
  }

  // </section>
}

//   return (
//     <>

//       {categories.map((category, index) => (
//         <div
//           key={index}
//           style={{ borderRadius: "100%" }}
//           className="col-lg-3 col-md-4 col-sm-6 d-flex custom-div"
//         >
//           <a
//             href="#"
//             className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
//           >
//             <div className="icon d-flex align-items-end justify-content-center">
//               <Image
//                 width={42}
//                 height={42}
//                 src={category.img}
//                 alt={`${category.skill} image`}
//                 className="lazy-img"
//               />
//             </div>

//             <h4 className="tx-dark mt-45 lg-mt-30">{category.skill}</h4>
//             <p style={{ fontSize: "15px" }}>{category.examples}</p>
//           </a>
//           {/* <Image
//             width={100}
//             height={200}
//             src={category.img}
//             alt=""
//             style={{ width: "90%", height: "80%" }}
//             className="lazy-img overlay-img"
//           /> */}
//           {/* /.card-style-eighteen */}
//         </div>
//       ))}

//       {/* {categories.map((item, index) => (
//         <div
//           key={index}
//           class="custom-div col-lg-3 col-md-4 col-sm-6 d-flex row align-items-end justify-content-center tran3s mb-40 xs-mb-20 mr-2"
//         >
//           <div className="icon d-flex align-items-end justify-content-center">
//             <Image
//               width={42}
//               height={42}
//               src={item.img}
//               alt=""
//               className="lazy-img"
//             />
//           </div>
//           <h3 class="text-center tx-dark mt-45 lg-mt-20">{item.skill}</h3>
//           <p class="text-center">{item.examples}</p>
//           <Image
//             width={300}
//             height={150}
//             src={item.img}
//             alt=""
//             className="lazy-img "
//           />
//         </div>
//       ))} */}

//       {/* <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
//         <a
//           href="#"
//           className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
//         >
//           <h3>20</h3>
//           <p className="pb-20">More Category</p>
//           <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />
//         </a>
//         /.card-style-eighteen
//       </div> */}
//     </>
//   );
// };

// export default CourseCategory;
