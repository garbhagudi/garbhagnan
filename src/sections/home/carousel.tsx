import React from "react";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {};

const CarouselHome = (props: Props) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {Data.map((items: any) => (
          <div className="" key={items?.id}>
            <div>
              <div className="absolute w-full h-full opacity-50 bg-zinc-600"></div>
              <div className="absolute flex flex-col items-center justify-center w-full h-full">
                {items?.onDisplayText}
                {/* <Link href={items?.link}>
                  <a className="px-3 py-1 mt-4 text-xs font-semibold text-white sm:text-lg md:px-4 md:py-2 bg-brandPink rounded-3xl">
                    Know More
                  </a>
                </Link> */}
              </div>
              <img src={items?.image} alt={items?.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;

const Data = [
  {
    id: 1,
    title: "",
    onDisplayText: (
      <div>
        <h1 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl font-heading">
          GarbhaGnan Foundation
        </h1>
        <p className="mt-1 text-sm font-semibold text-center text-white sm:mt-4 md:text-lg">
          <span className="font-xs md:text-md">
            The journey of umpteen smiles that started with a cry
          </span>
        </p>
      </div>
    ),
    link: "",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner01_uzleul.jpg",
  },
  {
    id: 2,
    title: "",
    onDisplayText: (
      <div>
        <h1 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl font-heading">
          Experience +
        </h1>
        <p className="mt-4 text-sm font-semibold text-center text-white md:text-lg">
          Expertise in handling complex sutuations
        </p>
      </div>
    ),
    link: "",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner02_q8sqob.jpg",
  },
  {
    id: 3,
    title: "",
    onDisplayText: (
      <div>
        <h1 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl font-heading">
          Training PHC Doctors
        </h1>
        <p className="mt-4 text-sm font-semibold text-center text-white md:text-lg">
          Creating awareness about infertility in men and women
        </p>
      </div>
    ),
    link: "",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner03_p77ixl.jpg",
  },
  {
    id: 4,
    title: "",
    onDisplayText: (
      <div>
        <h1 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl font-heading">
          Culminating Infertility <br />{" "}
          {/* <span className="text-xl md:text-3xl lg:text-5xl">
            
          </span> */}
        </h1>
        <p className="mt-4 text-lg font-semibold text-center text-white">
          Vision with a social mission
        </p>
      </div>
    ),
    link: "",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner04_ftaktj.jpg",
  },
  {
    id: 5,
    title: "",
    onDisplayText: (
      <div>
        <h1 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl font-heading">
          Women&apos;s Wellness Program
        </h1>
        <p className="mt-4 text-sm font-semibold text-center text-white md:text-lg">
          A wholesome approach to reproductive wellness
        </p>
      </div>
    ),
    link: "",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner05_r2jy5y.jpg",
  },
];
