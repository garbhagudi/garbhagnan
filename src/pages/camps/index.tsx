import React from "react";
import ContentOne from "sections/camps/content1";
import ContentTwo from "sections/camps/content2";
import Cta from "sections/camps/cta";
import Heading from "sections/camps/heading";
import Head from "next/head";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Camps | GarbhaGnan Foundation</title>
        <meta name="title" content="Camps | GarbhaGnan Foundation" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Camps | GarbhaGnan Foundation" />
        <meta property="og:site_name" content="GarbhaGnan Foundation" />
        <meta property="og:url" content="https://garbhagnan.org" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagnan" />
        <meta name="twitter:title" content="Camps | GarbhaGnan Foundation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <Heading />
      <ContentOne />
      <Cta />
      <ContentTwo />
      {/* <General /> */}
    </div>
  );
};

export default IndexPage;
