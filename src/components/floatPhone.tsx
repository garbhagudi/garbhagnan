import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";

type Props = {};

const FloatPhone = (props: Props) => {
  return (
    <div>
      <div className="fixed w-7 h-8 md:w-14 md:h-14 bottom-20 right-6 md:bottom-20 md:right-3.5 bg-brandBlueDark2 rounded-full flex items-center justify-center opacity-20 hover:opacity-100 transition-opacity duration-500 ease-linear">
        <a href="tel:+917204937376">
          <PhoneIcon className="w-3 h-4 text-white md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  );
};

export default FloatPhone;
