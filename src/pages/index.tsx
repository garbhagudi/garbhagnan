import React from "react";
import Activities from "sections/home/activities";
import CarouselHome from "sections/home/carousel";
import Collaborations from "sections/home/collaborations";
import Objective from "sections/home/objective";
import Overview from "sections/home/overview";
import WhatWeDid from "sections/home/what-we-did";
import Head from "next/head";

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> GarbhaGnan Foundation</title>
        <meta name="title" content=" | GarbhaGnan Foundation" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content=" | GarbhaGnan Foundation" />
        <meta property="og:site_name" content="GarbhaGnan Foundation" />
        <meta property="og:url" content="https://garbhagnan.org" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagnan" />
        <meta name="twitter:title" content=" | GarbhaGnan Foundation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
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
