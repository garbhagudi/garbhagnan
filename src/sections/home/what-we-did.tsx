import React from "react";
import Link from "next/link";

type Props = {};

const WhatWeDid = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center px-4 my-4 sm:mt-0">
          <h3 className="mb-3 text-lg uppercase text-brandPink">
            What we did ?
          </h3>
          <h1 className="mb-3 text-4xl font-bold md:text-5xl font-heading text-brandPurpleDark">
            Immediate Projects
          </h1>
          <p>
            Dr. Asha S Vijay conducted a Women’s Health awareness program for
            the employees of Karnataka State Handicrafts Development Corporation
            Ltd.,(A Government of Karnataka Undertaking) on April 5th 2021. The
            program was well received by the women employees of KSHDC and was an
            eye opener for many facing fertility issues. Smt. D ROOPA,IPS, IGP
            and Managing Director of KSHDC felicitated and honoured Dr. Asha S
            Vijay for conducting such informative awareness program.
          </p>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex items-center justify-center">
            <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-10 flex items-center justify-center w-full h-80">
              <p className="max-w-md px-2 mt-4 font-semibold text-center text-white sm:px-0">
                Training for doctors, lab technicians and support staff in PHCs
                – focus on rural areas. Help the existing doctors in providing
                some basic fertility treatment to the infertile couple
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660035139/garbhagnan.org/images/banner-1_wbfont.jpg"
              alt="background Image"
              className="object-cover object-center transition-all duration-700 ease-in group-hover:scale-125"
            />
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex items-center justify-center">
            <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-10 flex items-center justify-center w-full h-80">
              <p className="max-w-md px-2 mt-4 font-semibold text-center text-white sm:px-0">
                Free fertility screening camps in rural areas. Provide free
                consultations, scans, medicines, counseling, and investigations.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660035153/garbhagnan.org/images/banner-2_ylyy0o.jpg"
              alt="background Image"
              className="object-cover object-center transition-all duration-700 ease-in group-hover:scale-125"
            />
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex items-center justify-center">
            <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-10 flex items-center justify-center w-full h-80">
              <p className="max-w-md px-2 mt-4 font-semibold text-center text-white sm:px-0">
                Research in POR (Poor Ovarian Reserve) – Identify the causes for
                this, identify the remedies for this and identify steps to
                prevent this.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660035157/garbhagnan.org/images/banner-3_qrqykx.jpg"
              alt="background Image"
              className="object-cover object-center transition-all duration-700 ease-in group-hover:scale-125"
            />
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex items-center justify-center">
            <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-10 flex items-center justify-center w-full h-80">
              <p className="max-w-md px-2 mt-4 font-semibold text-center text-white sm:px-0">
                Setting up fertility wings in medical college hospitals to help
                poor couples get good quality fertility treatment.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660035162/garbhagnan.org/images/banner-4_mkwp0c.jpg"
              alt="background Image"
              className="object-cover object-center transition-all duration-700 ease-in group-hover:scale-125"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-5 md:my-0">
          <div>
            <p className="font-semibold text-left text-brandPurpleDark">
              Closed Projects
            </p>
            <h1 className="mt-2 text-5xl font-bold md:text-6xl font-heading text-brandPurpleDark">
              200+
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDid;
