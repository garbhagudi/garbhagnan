import React from "react";

type Props = {};

const StoryTwo = (props: Props) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 px-3 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048180/garbhagnan.org/images/our-initiatives_mbr1fe.jpg"
            alt="camp image"
            className="mb-4 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            Feedbacks of mothers who used the feeding booth in Lalbagh:
          </h1>
          <p className="pt-4">
            Sneha Rao: I visited the flower show at Lalbagh. I had my
            5-month-old baby with me. Thanks to the feeding booth sponsored by
            GarbhaGudi, I was able to feed my baby in privacy.
          </p>
          <p className="pt-4">
            Anushka Kamath: Thanks to GarbhaGudi for organizing a feeding booth
            where I could feed my 8-months-old baby. The ambience of the feeding
            booth was pleasant, comforting and our privacy was maintained.
          </p>
          <p className="pt-4">
            Sushma Kanthimath: I was so relieved when I got to know about the
            feeding booth. I was at the flower show with my 6-months-old baby
            when my baby suddenly started crying. The security then suggested
            the available feeding booth. We felt comforted and relaxed as we
            used the feeding booth. Thanks to GarbhaGudi.
          </p>
        </div>
      </div>
      <div className="px-3 py-6 mx-auto max-w-7xl">
        <p className="pt-4">
          The feeding Booth sponsored by GarbhaGudi is in itself a blessing in
          disguise. The comfortable private ambience makes the infants and the
          mothers feel at home. It has comforted thousands of mothers and their
          babies to find privacy and comfort and reminds them of stories of
          change in today’s world. Thanks to GarbhaGudi.
        </p>
      </div>
    </div>
  );
};

export default StoryTwo;
