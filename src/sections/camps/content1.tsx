import React from "react";

type Props = {};

const ContentOne = (props: Props) => {
  return (
    <div>
      <div className="py-10 font-semibold text-center">
        <span className="block">
          Fertility Screening Camps for Men &amp; Women
        </span>
        <span className="block">
          Put the Right Step Forward to See Baby Steps in the Future!
        </span>
      </div>
      <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 gap-x-10 max-w-7xl">
        <div className="flex flex-col items-start justify-center ">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            Why Fertility Screening Camps?
          </h1>
          <p className="pt-4">
            Infertility is fast becoming a roadblock for millions of couples who
            are eagerly waiting to cuddle their bundle of joy. There are many
            causative factors due to which this happens and things are not
            looking greener in the days to come. Instead of jumping into
            fertility treatments right away, it is highly essential to
            understand the root cause for infertility as generic treatments will
            not work on all men and women. We require both prospective and
            retrospective studies to arrive at the right treatment plan for the
            couple. Thorough research into the treatment protocol, drugs that
            need to be administered, suggestions for surgical or embryological
            improvements should all be analyzed step by step to finalize the
            issue at hand.
          </p>
          <p className="pt-4">
            Awareness is the first step to solving infertility issues and
            screening camps are the stepping stones!
          </p>
          <p className="pt-4">
            Adhering to great responses and the feedbacks we receive from
            couple, GarbhaGnan organizes regular health check-up and fertility
            screening camps to address the unawareness issue that exists as a
            cause of infertility. This is our way of giving back to the society
            and a road way to live our ultimate passion of eradication of
            infertility.
          </p>
        </div>
        <div className="mx-auto flex items.center justify-center ">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660051646/garbhagnan.org/images/ramnagara-camp-01_gquvpz.jpg"
            alt="image1"
            className="object-cover mt-4 lg:mt-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
