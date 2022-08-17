import React from "react";

type Props = {};

const StoryThree = (props: Props) => {
  return (
    <div className="py-10 -mb-10 bg-zinc-100">
      <div className="grid grid-cols-1 px-3 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold md:text-3xl font-heading">
            How Paripoorna helped the impoverished to get successful treatment:
          </h1>
          <p className="pt-4">
            India is a land with a 1.4 billion population. The standard of
            living in India shows a geographical disparity as well. For example,
            while the rich-class boasts world-class medical establishments,
            luxurious hotels, sports facilities and leisure activities similar
            to that of the first world developed nations, poverty is widespread
            in rural areas, where medical care tends to be very basic or
            unavailable. Likewise, infertility is also affecting the population
            nationwide. The infertility stats keep increasing day by day.
          </p>
          <p className="pt-4">
            Infertility is soul-crushing and challenging. Despite the various
            fertility treatment options available today, it is unavailable and
            inaccessible in low/middle-income societies due to the prohibitive
            costs compounded by an absence of financing. It becomes even more
            challenging for the lower income groups in rural areas. Keeping in
            mind the plight of the middle income and lower-income groups, the
            GarbhaGudi IVF association with GarbhaGnan Foundation has initiated
            the Paripoorna Act. Under this act, the BPL cardholders (people who
            are unable to bear the costs) get a beneficial waiver on IVF
            treatment. But it is applicable for limited patients, based on their
            eligibility.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1660050728/garbhagnan.org/images/stories-of-chang-4_hdilpn.jpg"
            alt="camp image"
            className="mt-4 rounded-xl"
          />
        </div>
      </div>
      <div className="px-3 py-6 mx-auto max-w-7xl">
        <p className="pt-4">
          One such example is Bharat and Renu, who got the benefits of the
          Paripoorna Act. The eligible couple got a discount on the IVF
          treatment cost and their success depicts of the couple having a
          healthy baby who has changed their lives positively.
        </p>
        <p className="pt-4">
          GarbhaGudi IVF through Paripoorna has transformed the lives of
          thousands of couples. They share success and take pride in making
          their lives happier than ever before by bringing in stories of change.
        </p>
      </div>
    </div>
  );
};

export default StoryThree;
