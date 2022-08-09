import React from "react";
import Activities from "sections/home/activities";
import CarouselHome from "sections/home/carousel";
import Collaborations from "sections/home/collaborations";
import Objective from "sections/home/objective";
import Overview from "sections/home/overview";
import WhatWeDid from "sections/home/what-we-did";

const IndexPage = () => {
  return (
    <div>
      <CarouselHome />
      <Overview />
      <Objective />
      <Activities />
      <WhatWeDid />
      <Collaborations />
    </div>
  );
};

export default IndexPage;
