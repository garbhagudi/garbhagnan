import React from "react";

type Props = {};

const ContentTwo = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 gap-x-10 max-w-7xl">
        <div className="flex items-center justify-center mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660051842/garbhagnan.org/images/ourcampsbanner2_fdrdd6.jpg"
            alt="image1"
            className="mb-4 lg:mb-0 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center ">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            How GarbhaGnan Foundation Can Help You Get ‘Garbha’ Gnan?
          </h1>
          <p className="pt-4">
            Infertility is not a curse, it is just a disease like any other,
            which can be cured with proper treatments given at the right time.
            Screen yourself with GarbhaGnan and ensure that you are wholesomely
            ready to bring another life into this world!
          </p>
          <p className="py-4">
            Sprinkles from the GarbhaGnan Foundation Magic:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              50+ Free Fertility Screening Camps across the length and breadth
              of Karnataka.
            </li>
            <li>
              500+ women conceived through free medications and subsidized
              treatments.
            </li>
            <li>2500+ free semen analysis done.</li>
            <li>5000+ Couples screened, counseled and advised.</li>
          </ul>
          <p className="pt-4">
            GarbhaGnan Foundation plans to run collaborative projects in the
            field of infertility through awareness, research, treatments and
            training of doctors in Public Health Centers along with Corporate
            and Government organizations so that every couple is ready to have a
            child.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
