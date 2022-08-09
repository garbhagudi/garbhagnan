import React from "react";

type Props = {};

const Objective = (props: Props) => {
  return (
    <div className="pt-16 mx-auto max-w-7xl">
      <div className="mx-auto mb-12 text-center lg:mb-10 max-w-prose">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-md text-dark font-heading">
          Our Objectives
        </h2>
        <p className="text-base text-body-color">
          To Be Graphically Represented
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 px-2 mt-12 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
        {Data.map((items) => (
          <div
            key={items.id}
            className="p-6 border shadow-xl rounded-2xl hover:shadow-2xl"
          >
            <div className="flex items-center justify-center my-4 ">
              <img
                src={items.image}
                alt={items.title}
                className="w-20 h-20 p-3 bg-gray-200 rounded-full"
              />
            </div>
            <h4 className="mb-3 font-semibold text-center text-md text-dark font-heading">
              {items.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objective;

const Data = [
  {
    id: 1,
    title: "Training medical professional at PHCs",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965247/garbhagnan.org/icons/icon-01_szmj7b.png",
  },
  {
    id: 2,
    title: "Creating Awareness on Preventive Reproductive Healthcare",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965249/garbhagnan.org/icons/icon-02_dgrapp.png",
  },
  {
    id: 3,
    title: "Research-oriented diagnosis and treatment",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965253/garbhagnan.org/icons/icon-03_coznuw.png",
  },
  {
    id: 4,
    title:
      "Providing access to subsidized quality healthcare to the rural population",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965258/garbhagnan.org/icons/icon-04_gljbfk.png",
  },
  {
    id: 5,
    title: "Free fertility screening camps for men and women",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965262/garbhagnan.org/icons/icon-05_nbkx2q.png",
  },
  {
    id: 6,
    title: "Women Wellness programs",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1659965266/garbhagnan.org/icons/icon-06_xpcxr2.png",
  },
];
