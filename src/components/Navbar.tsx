"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleLinkClick = (LinkName: string): void => {
    setActiveLink(LinkName);
  };

  return (
    <section className="relative flex w-full justify-center mb-5 bg-white ">
      <div className="p-5 flex flex-row w-full justify-between max-md:justify-center max-sm:justify-center max-md:text-sm items-center border-[1px] border-gray-100">
        <div className="flex text-2xl font-bold max-md:hidden">SM</div>

        <div className="py-1 px-1 ml-[95px] max-md:ml-0 gap-3  justify-between border-[1px] border-gray-200 rounded-full shadow-md flex font-Urbanist items-center">
          {/* Links to different sections of the page */}
          <div
            onClick={() => handleLinkClick("Home")}
            className={`font-semibold cursor-pointer text-[16px] py-2 px-6 max-md:px-[10px] max-md:py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeLink === "Home"
                ? "bg-gray-100 text-gray-900 "
                : "bg-transparent text-gray-400"
            }`}
          >
            Home
          </div>
          <div
            onClick={() => handleLinkClick("About")}
            className={`font-semibold cursor-pointer text-[16px] py-2 px-6 max-md:px-[10px] max-md:py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeLink === "About"
                ? "bg-gray-100 text-gray-900 "
                : "bg-transparent text-gray-400"
            }`}
          >
            About
          </div>
          <div
            onClick={() => handleLinkClick("Contact")}
            className={`font-semibold cursor-pointer text-[16px] py-2 px-6 max-md:px-[10px] max-md:py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeLink === "Contact"
                ? "bg-gray-100 text-gray-900 "
                : "bg-transparent text-gray-400"
            }`}
          >
            Contact
          </div>
          {/* Link to another route */}
          <div
            onClick={() => handleLinkClick("Blog")}
            className={`font-semibold cursor-pointer text-[16px] py-2 px-6 max-md:px-[10px] max-md:py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeLink === "Blog"
                ? "bg-gray-100 text-gray-900 "
                : "bg-transparent text-gray-400"
            }`}
          >
            Blog
          </div>
        </div>

        <div className="max-md:hidden flex gap-5 font-Urbanist items-center">
          {/* Image links */}
          <a  href="https://github.com/Thati05" >

          <div className="p-2 bg-gray-100 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
              alt="Icon"
              width={20}
              height={20}
              />
          </div>
              </a>
          <a href="https://www.instagram.com/thati_ly_/" >

          <div className="p-2 bg-gray-100 rounded-full">

            <img
              src="https://cdn-icons-png.flaticon.com/512/6433/6433684.png"
              alt="Icon"
              width={20}
              height={20}
              />
          </div>
              </a>
          <div className="p-2 bg-gray-100 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
              alt="Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
