import React from "react";
import { PhoneIcon, AtSymbolIcon } from "@heroicons/react/solid";

type Props = {};

const Map = (props: Props) => {
  return (
    <div>
      <section className="relative text-gray-600 body-font">
        <div className="container grid grid-cols-1 px-5 py-24 mx-auto lg:grid-cols-3 sm:flex-nowrap">
          <div className="relative flex items-end justify-start col-span-1 p-10 overflow-hidden bg-gray-300 rounded-lg sm:mr-10 lg:col-span-2">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5156540736284!2d77.5759935648216!3d12.938821490877384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1596b02fd78f%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1660054889934!5m2!1sen!2sin"
            ></iframe>
            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  GarbhaGnan Foundation, South End Circle, 26, Pattalamma Temple
                  Rd, Basavanagudi, Bengaluru, Karnataka 560004
                </p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  EMAIL
                </h2>
                <a
                  className="leading-relaxed text-brandPink hover:underline"
                  href="mailto:info@garbhagudi.com"
                >
                  info@garbhagnan.com
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">
                  PHONE
                </h2>
                <p className="leading-relaxed text-brandPurpleDark hover:underline">
                  <a href="+918880000909">+918880000909</a>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="pb-6 text-2xl font-semibold pt-14 lg:pt-0 font-heading">
              Contact us for :
            </div>
            <div className="grid grid-cols-1 gap-12 mt-8 sm:gap-x-8 sm:gap-y-16 lg:mt-0 font-content">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Appointments & Queries
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:dreams@garbhagudi.com"
                        className="text-purple-800 hover:underline"
                      >
                        <AtSymbolIcon className="inline-flex w-5 h-5" />{" "}
                        dreams@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href="tel:+918880000909"
                        className="text-brandPink2 hover:underline"
                      >
                        <PhoneIcon className="inline-block w-5 h-5" /> +91 888
                        000 0909
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Feedback & Complaints
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:grievance@garbhagudi.com"
                        className="text-purple-800 hover:underline"
                      >
                        <AtSymbolIcon className="inline-flex w-5 h-5" />{" "}
                        grievance@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href="tel:+918880000909"
                        className="text-brandPink2 hover:underline"
                      >
                        <PhoneIcon className="inline-block w-5 h-5" /> +91 888
                        000 0909
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Human Resources
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:hr@garbhagudi.com"
                        className="text-purple-800 hover:underline"
                      >
                        <AtSymbolIcon className="inline-flex w-5 h-5" />{" "}
                        hr@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href="tel:+919606002999"
                        className="text-brandPink2 hover:underline"
                      >
                        <PhoneIcon className="inline-block w-5 h-5" /> +91 96060
                        02999
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Partnership
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:jayaram@garbhagudi.com"
                        className="text-purple-800 hover:underline"
                      >
                        <AtSymbolIcon className="inline-flex w-5 h-5" />{" "}
                        jayaram@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href="tel:+919980997111"
                        className="text-brandPink2 hover:underline"
                      >
                        <PhoneIcon className="inline-block w-5 h-5" /> +91 99809
                        97111
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
