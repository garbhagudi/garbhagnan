import React from "react";

type Props = {};

const StoryOne = (props: Props) => {
  return (
    <div className="py-10 bg-zinc-100">
      <div className="grid grid-cols-1 px-3 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            Case study of couple who came to our camp and found success in GG
          </h1>
          <p className="pt-4">
            The problem of infertility confronts millions of people worldwide.
            In India, both the urban and the rural areas are equally affected by
            infertility. Due to awareness and education, urban couples come up
            openly with their problems and seek treatment whereas it is not the
            same case with the rural people for several reasons
          </p>
          <p className="pt-4">
            GarbhaGudi IVF Centre in association with GarbhaGnan Foundation
            organizes rural fertility health camps. These fertility health camps
            help to create awareness about the causes, symptoms and treatment
            options available today.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660050107/garbhagnan.org/images/stories-of-change-1_zmtym7.jpg"
            alt="camp image"
            className="mt-4 rounded-xl"
          />
        </div>
      </div>
      <div className="px-3 py-6 mx-auto max-w-7xl">
        <p className="pt-4">
          Shankar and Gauri who are married for five years were the participants
          of infertility awareness camps. At first, they were hesitant to share
          their problems. But later, the comforting words of the doctor made
          them share their concern. Our fertility doctors organized basic
          fertility screening tests. The problem was identified and diagnosed.
          The couple underwent counselling and were asked to visit any of the
          branches of GarbhaGudi. Our fertility doctors at GarbhaGudi examined
          their basic reports and suggested how they should go about their
          treatment. The couple hailed with success as they held their bundle of
          joy. The couple was thankful to GarbhaGudi for everything - from
          organizing the fertility camps, counselling, convincing them to go
          ahead with the treatment and finally delivering them the miracle.
        </p>
        <p className="pt-4">
          There are many such rural area cases that GarbhaGudi has resolved and
          brought a happy change in their lives. GarbhaGudi IVF- A place where
          your dream of parenthood comes to life! The happiness and gratitude
          the couples express while holding their baby in their hands is
          immeasurable.
        </p>
      </div>
    </div>
  );
};

export default StoryOne;
