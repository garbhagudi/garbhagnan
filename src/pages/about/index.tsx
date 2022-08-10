import React from "react";
import Heading from "sections/about/heading";
import Philosophy from "sections/about/philosophy";
import SectionOne from "sections/about/section1";
import SectionTwo from "sections/about/section2";
import Head from "next/head";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About | GarbhaGnan Foundation</title>
        <meta name="title" content="About | GarbhaGnan Foundation" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="About | GarbhaGnan Foundation" />
        <meta property="og:site_name" content="GarbhaGnan Foundation" />
        <meta property="og:url" content="https://garbhagnan.org" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagnan" />
        <meta name="twitter:title" content="About | GarbhaGnan Foundation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <Heading />
      <SectionOne />
      <SectionTwo />
      <Philosophy />
    </div>
  );
};

export default IndexPage;
