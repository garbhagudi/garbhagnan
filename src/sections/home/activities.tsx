import React from "react";
import Link from "next/link";

type Props = {};

const Activities = (props: Props) => {
  return (
    <div>
      <div>
        <div className="absolute flex flex-col items-center justify-center w-full h-80">
          <h1 className="text-4xl font-bold text-white md:text-5xl font-heading">
            Our Activities
          </h1>
          <p className="px-2 mt-4 font-semibold text-center text-white max-w-prose sm:px-0">
            GarbhaGnan foundation envisions the future and wants to create an
            impact in the lives of underprivileged women who struggle without
            the basic amenities by providing assistance and treatment for
            various gynecological issues of those who not just from the city but
            also who belong to the remotest of rural areas.
          </p>
          <div className="mt-8 text-center sm:text-left">
            <Link href="/">
              <a className="px-6 py-3 font-semibold text-white text-md bg-brandPink rounded-3xl">
                Know More
              </a>
            </Link>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/garbhagudi/image/upload/v1660029770/garbhagnan.org/images/counter_rps6b5.jpg"
          alt="background Image"
          className="object-cover w-screen mt-10 h-80"
        />
      </div>
    </div>
  );
};

export default Activities;
