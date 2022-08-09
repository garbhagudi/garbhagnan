import React from "react";
import Heading from "sections/stories-of-change/heading";
import StoryOne from "sections/stories-of-change/story1";
import StoryTwo from "sections/stories-of-change/story2";
import StoryThree from "sections/stories-of-change/story3";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Heading />
      <StoryOne />
      <StoryTwo />
      <StoryThree />
    </div>
  );
};

export default IndexPage;
