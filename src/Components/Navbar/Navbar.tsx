import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Navlinks } from "./Navlinks";
import Logo from "../../assets/img/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 sticky top-0 py-6 x-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <img src={Logo} className="h-8 w-auto" alt="" />
        <ul className="xl:flex items-center hidden space-x-8 lg:flex">
          {Navlinks.map((nav, index) => (
            <li
              key={index}
              className="font-normal cursor-pointer text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {nav.link}
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
  <button
    aria-label="Open Menu"
    title="Open Menu"
    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
    onClick={() => setIsMenuOpen(true)}
  >
    <RxHamburgerMenu size={30} aria-hidden="true" />
  </button>
  {isMenuOpen && (
    <div className="absolute top-0 left-0 w-full">
      <div className="p-5 bg-white border rounded shadow-sm">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="w-full">
              <img src={Logo} className="h-8 w-auto" alt="Company Logo" />
            </div>
            <button
              aria-label="Close Menu"
              title="Close Menu"
              className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose size={30} aria-hidden="true" />
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              {Navlinks.map((nav, index) => (
                <li
                  key={index}
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {nav.link}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Navbar;
