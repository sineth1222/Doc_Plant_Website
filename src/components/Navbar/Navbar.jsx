import React from "react";
import Logo from "../../assets/website/social.png";
import { FaLeaf } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="text-black bg-white shadow-md bg-white-to-r from-secondary to-secondary/90">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Doc Plants
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex items-center justify-between gap-4"
            >
              <ul className="items-center hidden gap-4 sm:flex">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-3 px-4 py-2 text-white duration-200 rounded-full bg-primary/70 hover:scale-105">
                Plants
                <RiPlantFill className="text-xl text-white cursor-pointer drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
