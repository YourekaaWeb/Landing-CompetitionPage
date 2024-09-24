"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    skill: "Visual arts",
    examples: "digital, painting, sculpture, photography, etc",
    img: "/images/gallery/competitionsImages/artist2.jpg"
  },
  {
    skill: "Performing arts",
    examples: "music, dance, theater, spoken word, film etc",
    img: "/images/gallery/competitionsImages/performingArts2.jpeg"
  },
  {
    skill: "Literary arts",
    examples: "poetry, short stories, essays, etc",
    img: "/images/gallery/competitionsImages/bookArt1.jpeg"
  },
  {
    skill: "Gaming",
    examples: "adventure, combat,  battle arena, alternate reality, etc",
    img: "/images/gallery/competitionsImages/gaming-img.jpg"
  },
  {
    skill: "Craftsmanship",
    examples: "wood, metal, clay, glass, etc.",
    img: "/images/gallery/competitionsImages/craft1.jpeg"
  },
  {
    skill: "Fashion ",
    examples: "clothing, accessories, beauty, textiles, etc.",
    img: "/images/gallery/competitionsImages/fashion-img.jpg"
  },
  {
    skill: "Digital media",
    examples: "motion design, animation, graphic design, etc",
    img: "/images/gallery/competitionsImages/digital2.png"
  },
  {
    skill: "Unconventional materials",
    examples: "recycled materials, natural elements, etc",
    img: "/images/gallery/competitionsImages/unconventionArt-img.jpg"
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
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  //   const scrollAmount = containerRef.current.scrollWidth / categories.length;
  //   // containerRef.current.scrollTo({
  //   //   left: currentIndex * scrollAmount,
  //   //   behavior: "smooth"
  //   // });
  //   // }, 1000);

  //   // return () => clearInterval(interval);
  // }, [currentIndex]);

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
}
