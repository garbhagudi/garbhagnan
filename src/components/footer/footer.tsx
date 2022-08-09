import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const navigation = {
  about: [
    {
      name: "Vision & Mission",
      href: "https://garbhagudi.com/about/vision-and-mission",
    },
    { name: "Directors", href: "https://garbhagudi.com/about/overview" },
    {
      name: "Awards & Accolades",
      href: "https://garbhagudi.com/about/awards-and-accolades",
    },
    { name: "Dr Asha S Vijay", href: "https://drashasvijay.com" },
  ],
  support: [
    { name: "GG CARE", href: "/gg-care" },
    { name: "Phone", href: "tel:+918880000909" },
    { name: "Email", href: "mailto:dreams@garbhagudi.com" },
  ],
  company: [
    { name: "GarbhaGudi IVF", href: "https://garbhagudi.com/about/overview" },
    { name: "GGIRHR", href: "https://ggirhr.com" },
    { name: "GarbhaGnan Foundation", href: "https://garbhagnan.org" },
    { name: "GarbhaGudi Pharma", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "https://garbhagudi.com/legal/privacy-policy" },
    { name: "Terms", href: "/legal/terms-and-conditions" },
    {
      name: "Refund Policy",
      href: "https://garbhagudi.com/legal/refund-policy",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="mt-10 bg-neutral-50 font-content"
      aria-labelledby="footerHeading"
      id="footer"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 pb-12 mx-auto border-t max-w-7xl sm:px-6 lg:py-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 mt-12 antialiased text-center xl:mt-0 xl:col-span-full">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-brandliteGray">
                  About
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className="cursor-pointer text-brandDark hover:text-brandPink hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-brandliteGray">
                  Support
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className="cursor-pointer text-brandDark hover:text-brandPink hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-brandliteGray">
                  Organisation
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} rel="noreferrer" target={"_blank"}>
                        <span className="cursor-pointer text-brandDark hover:text-brandPink hover:underline">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-brandliteGray">
                  Legal
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className="cursor-pointer text-brandDark hover:text-brandPink hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto border-t border-gray-200 max-w-7xl ">
        <div className="flex justify-center mt-8 space-x-2 items-ceter">
          <SocialIcon
            url="https://www.youtube.com/c/GarbhaGudiIVFCentre"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/garbhagudiIVF/"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/garbagudi"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://twitter.com/garbhagudiivf"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="mailto:dreams@garbhagudi.com"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
        </div>
        <p className="py-8 text-center text-gray-900 font-content">
          &copy; {new Date().getFullYear()} GarbhaGnan Foundation, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
