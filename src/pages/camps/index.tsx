import React from "react";
import ContentOne from "sections/camps/content1";
import ContentTwo from "sections/camps/content2";
import Cta from "sections/camps/cta";
import General from "sections/camps/general";
import Heading from "sections/camps/heading";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Heading />
      <ContentOne />
      <Cta />
      <ContentTwo />
      {/* <General /> */}
    </div>
  );
};

export default IndexPage;
