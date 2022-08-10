import React from "react";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 px-3 lg:grid-cols-2 lg:gap-x-16">
        <div className="px-3 pt-12 mx-auto sm:pt-16 lg:pt-20 sm:px-0">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1659959780/garbhagnan.org/banner/banner01_uzleul.jpg"
            alt="image"
            className=" h-80 lg:h-[32rem] object-cover object-center rounded-3xl"
          />
        </div>
        <div className="">
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 ">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-heading lg:mt-10">
                Welcome To GarbhaGnan Foundation
              </h2>
              <div className="mt-3 text-base text-brandDark sm:mt-5 sm:text-xl lg:text-lg xl:text-base font-content">
                <p className="italic text-md lg:text-lg">
                  “Sometimes the smallest step in the right direction ends up
                  being the biggest step in your life”- Naeem Callaway.
                </p>
                <p className="mt-6 text-md lg:text-lg">
                  We are the Garbhagnan Foundation and like everyone else, we
                  started small and are now growing bigger and bigger! We have
                  taken baby steps towards improving Reproductive Health amongst
                  men & women through medical camps and awareness programs.
                </p>
                <p className="mt-6 mb-6 text-md lg:text-lg">
                  Our research-based structural approach has given us the boost
                  to enter into the tiniest fragments of the country.
                </p>
                <div className="mt-8 text-center sm:text-left">
                  <Link href="/">
                    <a className="px-6 py-3 font-semibold text-white text-md bg-brandPink rounded-3xl">
                      Know More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
