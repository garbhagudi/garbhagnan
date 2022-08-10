import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <nav className="pb-4 bg-white border-b shadow-2xl">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 xl:justify-center">
            <div className="flex items-center align-middle cursor-pointer ">
              <div className="flex-shrink-0 pt-4">
                <Link href="/" passHref>
                  <a>
                    <img
                      src="https://res.cloudinary.com/garbhagudi/image/upload/v1659957668/garbhagnan.org/Logos/logo-2_tqqt4u.png"
                      alt="logo"
                      className="w-48 h-full xl:w-64"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden xl:block">
                <div className="flex items-baseline pt-4 ml-16 space-x-4">
                  <Link href="/" passHref>
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Home
                    </span>
                  </Link>
                  <Link href="/about" passHref>
                    <span
                      className={
                        router.pathname == "/about"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      About
                    </span>
                  </Link>
                  <Link href="/our-initiatives" passHref>
                    <span
                      className={
                        router.pathname == "/our-initiatives"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Our Initiatives
                    </span>
                  </Link>
                  <Link href="/stories-of-change" passHref>
                    <span
                      className={
                        router.pathname == "/stories-of-change"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Stories of Change
                    </span>
                  </Link>
                  <Link href="/camps" passHref>
                    <span
                      className={
                        router.pathname == "/camps"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Camps
                    </span>
                  </Link>
                  <Link href="/collaborations" passHref>
                    <span
                      className={
                        router.pathname == "/collaborations"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Collaborations
                    </span>
                  </Link>
                  <Link href="https://garbhagudi.com/gg-care" passHref>
                    <span
                      className={
                        router.pathname == "/gg-care"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandPink px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      GG CARE
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mr-2 xl:hidden">
              <button className="mt-4 mr-4">
                <Link href="https://garbhagudi.com/gg-care">
                  <a className="px-3 py-2 text-xs font-bold text-white bg-brandPink hover:bg-gray-800 rounded-2xl">
                    Contact Us
                  </a>
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 mt-4 text-gray-400 bg-gray-900 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href={"/"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    Home
                  </a>
                </Link>
                <Link href={"/about"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    About
                  </a>
                </Link>
                <Link href={"/our-initiatives"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    Initiatives
                  </a>
                </Link>
                <Link href={"/stories-of-change"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    Stories of Change
                  </a>
                </Link>
                <Link href={"/camps"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    Camps
                  </a>
                </Link>
                <Link href={"/collaborations"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    Collaborations
                  </a>
                </Link>
                <Link href={"/gg-care"} passHref>
                  <a className="block px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-brandPink hover:text-white">
                    GG CARE
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
