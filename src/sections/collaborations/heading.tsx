import React from "react";

type Props = {};

const Heading = (props: Props) => {
  return (
    <div>
      <div className="absolute w-full opacity-20 h-60 bg-brandBlue"></div>
      <div className="absolute flex flex-col items-center justify-center w-full h-60">
        <h1 className="text-4xl font-bold text-white uppercase md:text-5xl font-heading">
          Collaborations
        </h1>
      </div>
      <img
        src="https://res.cloudinary.com/garbhagudi/image/upload/v1660029770/garbhagnan.org/images/counter_rps6b5.jpg"
        alt="background Image"
        className="object-cover w-screen h-60"
      />
    </div>
  );
};

export default Heading;
