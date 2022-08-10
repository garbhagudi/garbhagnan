import React from "react";
import Link from "next/link";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="py-4 mx-auto ">
      <div>
        <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 gap-x-10 max-w-7xl">
          <div className="flex flex-col items-start justify-center ">
            <h1 className="text-2xl font-bold md:text-3xl font-heading">
              Conducting fertility Health Camps in rural areas:
            </h1>
            <p className="pt-4">
              Unawareness is the main reason people in rural areas suffer from
              adverse fertility health complications. Conducting fertility
              health camps and providing health tips and recommendations is the
              best way to bring awareness among underprivileged people to lead a
              healthy life. As a responsibility to give back to society, these
              fertility camps empower people through education, health, and safe
              surroundings. GarbhaGnan Foundation contributes by social
              awareness to stay healthy and fit by conducting fertility health
              camps and medicine distribution programs. GarbhaGnan Foundation
              dedicatedly brings a positive change to the underprivileged
              section of society. It aims to help people in rural areas to know
              about their fertility and lead a healthy lifestyle.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048166/garbhagnan.org/images/ourcampsbanner1_tmglz9.jpg"
              alt="image1"
              className="mt-4 lg:mt-0 rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-zinc-100">
        <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 gap-x-10 max-w-7xl">
          <div className="mx-auto">
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048180/garbhagnan.org/images/our-initiatives_mbr1fe.jpg"
              alt="image1"
              className="mb-4 rounded-xl lg:mb-0"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-bold md:text-3xl font-heading">
              Feeding booth during Independence Day in Lalbagh:
            </h1>
            <p className="pt-4">
              GarbhaGnan Foundation, as a social responsibility, sponsors and
              organizes a feeding booth during the Independence Day Flower Show
              at Lalbagh. This feeding booth is where the visiting mother can
              use and feed her baby in privacy. The booth is well maintained and
              provides a safe atmosphere for both mother and infant.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-bold md:text-3xl font-heading">
              <Link href="https://garbhagudi.com/features/paripoorna">
                <a target={"_blank"}>Paripoorna Program </a>
              </Link>
            </h1>
            <p className="pt-4">
              The word ‘PARIPOORNA’ means fulfilment. GarbhaGudi under Dr Asha’s
              medical supervision is trying to fulfil the dreams of many couples
              in achieving their parenthood. <br />
              <br />
              Paripoorna is an initiative of GarbhaGudi IVF Centre and is being
              done in association with GarbhaGnan Foundation. It is a special
              benefit plan for patients who want to go in for fertility
              treatment, but are unable to bear the costs. It applies to a
              limited number of couples and is based on their eligibility.
            </p>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048187/garbhagnan.org/images/our-initiatives-2-chi_uqognb.jpg"
              alt="paripoorna"
              className="py-1 pt-4 mx-auto"
            />
          </div>
          <div className="flex items-center justify-center mx-auto">
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048183/garbhagnan.org/images/our-initiatives-2_rwnwut.jpg"
              alt="image1"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="-mb-20 bg-zinc-100">
        <div className="grid grid-cols-1 px-3 py-10 mx-auto lg:grid-cols-2 max-w-7xl gap-x-10">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1660048191/garbhagnan.org/images/our-initiatives-3_cf2czd.jpg"
              alt="image1"
              className="mb-4 rounded-xl lg:mb-0"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold md:text-3xl font-heading">
              Health talks conducted by Dr Asha for many corporations such as
              Sony, Infosys etc.
            </h1>
            <p className="mt-4">
              Today the corporate world is growing leaps and bounds. Due to a
              sedentary lifestyle, many people suffer from fertility health
              conditions but do not realize it. It results in individuals either
              not receiving treatment or not receiving it in time, although
              effective medicines and therapies are available. To prevent this
              occurrence, Dr Asha conducts fertility health talks. Fertility
              Health talks raise awareness and improve knowledge of diseases,
              their symptoms and treatment options. Ultimately, healthcare
              professionals and patients can only make informed decisions if
              they have accurate information. Through GarbhaGnan Foundation, Dr
              Asha seeks to empower communities, medical professionals and
              patients with appropriate tools, knowledge and skills so that they
              can make high-quality, informed decisions on prevention,
              diagnosis, treatment, care, and disease management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
