import React from "react";
import Link from "next/link";

type Props = {};

const SectionTwo = (props: Props) => {
  return (
    <div className="px-3 mx-auto max-w-7xl sm:px-0">
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center max-w-prose">
          <h1 className="py-2 text-2xl font-bold md:text-3xl font-heading">
            Solving Infertility - Transitioning HER from Woman to Mother!
          </h1>
          <p className="pb-2">
            Infertility is a common problem all over the world. Yet it is also
            one of the most misunderstood health issues. In most cases, the
            problem can be resolved with the right treatment at the right time.
            Unfortunately, not many women living in the rural and isolated parts
            of India have access to the right doctors. This is where GarbhaGnan
            Foundation is making a difference. We are devoted to ensuring that
            women have a chance to enjoy the beautiful journey of motherhood
            with the help of specialized doctors who are experienced in the
            latest treatments and procedures.
          </p>
          <p className="pb-2">
            Come find out how GarbhaGnan Foundation is taking little steps to
            ensure that you have a Baby!
          </p>
          <Link href="/gg-care">
            <a className="px-3 py-2 mt-8 mb-6 text-white sm:mb-0 bg-brandPink hover:bg-brandPink4 rounded-2xl">
              Ask Now
            </a>
          </Link>
        </div>
        <div className="object-cover mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660045650/garbhagnan.org/images/about-img-2_bvjkfm.jpg"
            alt="image1"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
