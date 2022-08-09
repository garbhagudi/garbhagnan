import React from "react";

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="text-white  bg-brandPink">
      <div className="px-3 py-10 mx-auto max-w-7xl">
        <h1 className="text-xl font-bold md:text-2xl font-heading">
          Fertility Screening Camps by GarbhaGnan Foundation– Who should go?
        </h1>
        <p className="pt-4 text-lg">
          India is about to reach the replacement ration in the next 20 years
          and our population will stabilize by then or it may also start
          dropping. Infertility will become a major cause of concern then. In
          order to prevent such a catastrophe, it is required to conduct these
          fertility screening camps for all men and women who are in the
          fertility period.
        </p>
      </div>
    </div>
  );
};

export default Cta;
