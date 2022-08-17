import React from "react";
// import Link from "next/link";

const Overview = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 px-3 lg:grid-cols-2 lg:gap-x-16">
        <div className="flex items-center justify-center px-3 pt-12 mx-auto sm:pt-16 lg:pt-20 sm:px-0">
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
                  &quot;Either do it with devotion or don’t do it at all.
                  Nothing in between.&quot; – Mahatria Ra
                </p>
                <p className="mt-6 text-md lg:text-lg">
                  GarbhaGnan Foundation, a pivotal part of GarbhaGudi started
                  out of our commitment to the society and our passion to
                  eliminate infertility. Through GarbhaGnan, we are able to
                  reach more couple; even those who are not from socially
                  affluent backgrounds and women from remote areas who have no
                  proper access to basic health care. Our research-based
                  structural approach has given us the boost to enter into the
                  tiniest fragments of the country.
                </p>
                <p className="mt-6 mb-6 text-md lg:text-lg">
                  Our goal is to make sure everyone has accessibility to
                  awareness related to infertility and the reach to be able to
                  have their baby irrespective of their social and economic
                  status.
                </p>
                {/* <div className="mt-8 text-center sm:text-left">
                  <Link href="/">
                    <a className="px-6 py-3 font-semibold text-white text-md bg-brandPink rounded-3xl">
                      Know More
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
