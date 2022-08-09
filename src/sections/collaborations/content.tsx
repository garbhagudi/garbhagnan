import React from "react";
import Collaborations from "sections/home/collaborations";

type Props = {};

const Content = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 gap-x-10 max-w-7xl">
        <div className="flex flex-col items-start justify-center ">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            Our collaboration with Rotary, COWE, Rashtothana and H365 (health
            care 365):
          </h1>
          <p className="pt-4">
            Infertility is a reproductive disease that gets cured with the
            appropriate treatment at the right time. GarbhaGnan Foundation
            ensures that fertility screening reaches every nook and corner of
            our country.
          </p>
          <p className="pt-4">
            So far, GarbhaGnan has successfully created miracles:
          </p>
          <ul className="pt-4 space-y-2 list-disc list-inside">
            <li>
              50+ Free Fertility Screening Camps across the length and breadth
              of Karnataka
            </li>
            <li>
              500+ women conceived through free medications and subsidized
              treatments
            </li>
            <li>2500+ free semen analysis done</li>
            <li>5000+ Couples screened, counselled and advised</li>
          </ul>
          <p className="pt-4">
            GarbhaGnan Foundation doesn’t want to stop here. It believes in
            expanding its wings in creating awareness, infertility treatments,
            research, and training of doctors nationwide. With such a large view
            in mind, GarbhaGnan Foundation has collaborated with Rotary, COWE,
            Rashtothana and H365 (health care 365) to spread the wings of
            infertility solutions throughout the nation. It ensures all the
            Public Health Centers, Corporate and Government organizations can
            help every couple have a child.
          </p>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660051646/garbhagnan.org/images/ramnagara-camp-01_gquvpz.jpg"
            alt="image1"
            className="mt-4 lg:mt-0 rounded-xl"
          />
        </div>
      </div>
      <Collaborations />
    </div>
  );
};

export default Content;
