import React from "react";

type Props = {};

const Collaborations = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <h1 className="pt-12 pb-6 text-3xl font-bold text-center md:text-4xl font-heading">
          Collaborations
        </h1>
        <p className="pb-8 text-center">
          We have successfully conducted Women wellness talks in association
          with
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
        {Data.map((items) => (
          <div key={items.id} className="mx-auto">
            <img src={items.image} alt="logo" className="w-56" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborations;

const Data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1660038058/garbhagnan.org/Logos/col-1_hsnyim.jpg",
  },
  // {
  //   id: 2,
  //   image:
  //     "https://res.cloudinary.com/garbhagudi/image/upload/v1660038074/garbhagnan.org/Logos/col-2_wwfb7d.jpg",
  // },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1660038081/garbhagnan.org/Logos/col-3_ymtnmu.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1660038084/garbhagnan.org/Logos/col-4_dpxzcc.jpg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1660038091/garbhagnan.org/Logos/col-5_eypqog.jpg",
  },
];
