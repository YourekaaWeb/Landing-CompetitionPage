import Image from "next/image";
import React from "react";

const CourseCategory = () => {
  const categories = [
    {
      skill: "Visual arts",
      examples: "digital, painting, sculpture, photography, etc",
      img: "/images/gallery/competitionsImages/visualArts2.png",
      alt: ""
    },
    {
      skill: "Performing arts",
      examples: "music, dance, theater, spoken word, film etc",
      img: "/images/gallery/competitionsImages/music1.png",
      alt: ""
    },
    {
      skill: "Literary arts",
      examples: "poetry, short stories, essays, etc",
      img: "/images/gallery/competitionsImages/literaryArts1.jpg",
      alt: ""
    },
    {
      skill: "Gaming",
      examples:
        "Adventure games, Fighting games, Multiplayer online battle arena games, Alternate reality games, etc",
      img: "/images/gallery/competitionsImages/visualArts2.png",
      alt: ""
    },
    {
      skill: "Craftsmanship",
      examples: "wood, metal, clay, glass, etc.",
      img: "/images/gallery/competitionsImages/craft1.jpeg",
      alt: ""
    },
    {
      skill: "Fashion Designer",
      examples:
        "Streetwear Designers, Accessory Designers, Textile Designers, etc",
      img: "/images/gallery/competitionsImages/fashion-img.jpg",
      alt: ""
    },
    {
      skill: "Digital media",
      examples: "video, animation, graphic design, etc.",
      img: "/images/gallery/competitionsImages/digital2.png",
      alt: ""
    },
    {
      skill: "Unconventional materials",
      examples: "recycled materials, natural elements, etc",
      img: "/images/gallery/competitionsImages/unconventionArt-img.jpg",
      alt: ""
    }
  ];

  const category = {
    skill: "Visual arts",
    examples: "digital, painting, sculpture, photography, etc",
    img: "/images/gallery/competitionsImages/visualArts2.png",
    alt: ""
  };
  // const categories = [
  //   {
  //     icon: "/images/icon/icon_127.svg",
  //     title: "IT",
  //     courses: "120+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_128.svg",
  //     title: "Graphic Design",
  //     courses: "318+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_129.svg",
  //     title: "Art",
  //     courses: "73+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_130.svg",
  //     title: "Business",
  //     courses: "430+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_131.svg",
  //     title: "Digital Marketing",
  //     courses: "230+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_132.svg",
  //     title: "Language",
  //     courses: "310+ Courses",
  //   },
  //   {
  //     icon: "/images/icon/icon_133.svg",
  //     title: "Development",
  //     courses: "73+ Courses",
  //   },
  // ];

  return (
    <>
      {/* {categories.map((category, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <a
            href="#"
            className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={42}
                height={42}
                src={category.img}
                alt=""
                className="lazy-img"
              />
            </div>
            <h4 className="tx-dark mt-45 lg-mt-30">{category.skill}</h4>
            <p>{category.examples}</p>
          </a>
          /.card-style-eighteen
        </div>
      ))} */}
      {categories.map((category, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 d-flex custom-div"
        >
          <a
            href="#"
            className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={42}
                height={42}
                src={category.img}
                alt=""
                className="lazy-img"
              />
            </div>

            <h4 className="tx-dark mt-45 lg-mt-30">{category.skill}</h4>
            <p style={{ fontSize: "15px" }}>{category.examples}</p>
          </a>
          {/* <Image
            width={100}
            height={200}
            src={category.img}
            alt=""
            style={{ width: "90%", height: "80%" }}
            className="lazy-img overlay-img"
          /> */}
          {/* /.card-style-eighteen */}
        </div>
      ))}

      {/* {categories.map((item, index) => (
        <div
          key={index}
          class="custom-div col-lg-3 col-md-4 col-sm-6 d-flex row align-items-end justify-content-center tran3s mb-40 xs-mb-20 mr-2"
        >
          <div className="icon d-flex align-items-end justify-content-center">
            <Image
              width={42}
              height={42}
              src={item.img}
              alt=""
              className="lazy-img"
            />
          </div>
          <h3 class="text-center tx-dark mt-45 lg-mt-20">{item.skill}</h3>
          <p class="text-center">{item.examples}</p>
          <Image
            width={300}
            height={150}
            src={item.img}
            alt=""
            className="lazy-img "
          />
        </div>
      ))} */}

      {/* <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
        <a
          href="#"
          className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
        >
          <h3>20</h3>
          <p className="pb-20">More Category</p>
          <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />
        </a>
        /.card-style-eighteen
      </div> */}
    </>
  );
};

export default CourseCategory;
