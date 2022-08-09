import React from "react";

type Props = {};

const SectionOne = (props: Props) => {
  return (
    <div className="px-3 mx-auto max-w-7xl sm:px-0">
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-2">
        <div className="object-cover mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660044302/garbhagnan.org/images/image_about-1_eylxe8.png"
            alt="image1"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center max-w-prose">
          <h1 className="py-2 text-3xl font-bold md:text-4xl font-heading">
            GarbhaGnan Foundation
          </h1>
          <p className="pb-2 italic font-semibold">
            Specialized Healthcare for Women
          </p>
          <p className="pb-2">
            GarbhaGnan Foundation offers specialized healthcare solutions to
            women across social backgrounds. At GarbhaGnan Foundation,
            subsidized infertility treatments for women are a reality!
          </p>
          <p className="pb-2">
            GarbhaGnan Foundation is not just about healthcare, though that will
            be the initial focus due to the nature of our business. The
            Foundation’s aim is to work on the above mentioned areas.
          </p>
          <h2 className="py-3 text-2xl font-bold md:text-3xl font-heading">
            Welcome to GarbhaGnan Foundation!
          </h2>
          <p>
            GarbhaGnan Foundation is one of the foremost foundations in the
            country that offers specialized and the latest health care for
            women. With growing rates of infertility across the globe due to
            varying diet, lesser physical exertion and so on, GarbhaGnan
            Foundation remains steadfast in helping women get unparalleled care
            from experienced specialists.
          </p>
        </div>
      </div>
      <div className="py-6 max-w-7xl">
        Rural India has always remained under the radar when it comes to primary
        healthcare. GarbhaGnan Foundation holds regular health camps focusing on
        gynecology in different rural parts of the country under the guidance of
        a specialized team of doctors who have plenty of experience. It is one
        of the first institutions in the country to organize gynecology camps
        for women who do not have the means to access to proper health care.
      </div>
    </div>
  );
};

export default SectionOne;
