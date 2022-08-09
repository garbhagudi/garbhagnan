import React from "react";

type Props = {};

const StoryOne = (props: Props) => {
  return (
    <div className="py-10 bg-zinc-100">
      <div className="grid grid-cols-1 px-3 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            Case study of patients who came to camp, got tests done and they
            found success in GG
          </h1>
          <p className="pt-4">
            Infertility is a disease of the reproductive system due to which
            women fail to achieve pregnancy in their reproductive years (15-49)
            after regular unprotected sex for twelve or more months. The problem
            of infertility confronts millions of people worldwide. In India,
            both the urban and the rural areas are equally affected by
            infertility. Due to awareness and education, urban couples come up
            openly with their problems and seek treatment whereas; it is not the
            same with the rural people for several reasons
          </p>
          <p className="pt-4">
            The GarbhaGudi IVF association with GarbhaGnan Foundation organizes
            rural fertility health camps. These fertility health camps help
            create awareness about the causes, symptoms and treatment options
            available today.
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
          Shankar and Gauri, married for five years, were the participants of
          infertility awareness camps. At first, they were hesitant to share
          their problems. But later, the comforting words of the doctor made
          them share their concern. Our fertility doctors organized some basic
          fertility screening tests. The problem identified and diagnosed. The
          couple underwent counselling and asked to visit any of the branches of
          GarbhaGudi IVF. Our fertility doctors at GarbhaGudi examined their
          basic reports and suggested how they go further with the treatment.
          The couple hailed with success as they hold their bundle of joy. The
          couple was thankful to GarbhaGudi for everything from organizing the
          fertility camps, counselling and convincing them to go ahead with the
          treatment and finally delivering them the miracle.
        </p>
        <p className="pt-4">
          There are many such rural area cases that GarbhaGudi has resolved and
          brought a happy change in their lives. GarbhaGudi IVF- A place where
          your dream of parenthood comes to life! The happiness and gratitude
          the couples express by holding their baby in their hands are
          immeasurable.
        </p>
      </div>
    </div>
  );
};

export default StoryOne;
