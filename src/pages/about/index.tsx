import React from "react";
import Heading from "sections/about/heading";
import Philosophy from "sections/about/philosophy";
import SectionOne from "sections/about/section1";
import SectionTwo from "sections/about/section2";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Heading />
      <SectionOne />
      <SectionTwo />
      <Philosophy />
    </div>
  );
};

export default IndexPage;
