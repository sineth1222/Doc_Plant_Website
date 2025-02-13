import React from "react";
import Img2 from "../../assets/plant.png";
import Img3 from "../../assets/green-tea.png";
import Img4 from "../../assets/apple.png";
import Img5 from "../../assets/coconut-tree.png";
import Img6 from "../../assets/sprout.png";
import Img7 from "../../assets/tomato.png";
import Img8 from "../../assets/tomatoes.png";
import Img9 from "../../assets/vine.png";
import Img10 from "../../assets/ficus.png";
import Img11 from "../../assets/plant-a-tree.png";
import Img12 from "../../assets/leaf.png";
import potato from "../Potato/potato";
import { Link } from "react-router-dom";  // Import Link

const ServicesData = [
  {
    id: 1,
    img: Img11,
    name: "Potato",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "100",
    /*link: Potato,*/
  },
  {
    id: 2,
    img: Img3,
    name: "Tea",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "700",
  },
  {
    id: 3,
    img: Img9,
    name: "Grapes",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "1300",
  },
  {
    id: 4,
    img: Img7,
    name: "Tomato",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img10,
    name: "Coffee",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "900",
  },
  {
    id: 6,
    img: Img4,
    name: "Apple",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "1100",
  },
  {
    id: 7,
    img: Img12,
    name: "Chillie",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "500",
  },
  {
    id: 8,
    img: Img5,
    name: "Coconut",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "1500",
  },
  {
    id: 9,
    img: Img8,
    name: "Cherry",
    description:
      "By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.",
    aosDelay: "1700",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="mb-32 text-center">
            <h1 className="text-4xl font-bold text-gray-800 font-cursive">
              Best Solution For Your Diesese Plants
            </h1>
          </div>

          {/* Services Card section  /}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            {ServicesData.map((service, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                /*className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"/
                className={`rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px] 
                  ${index < 6 ? "mb-20" : ""}`} // Adds bottom margin to first row
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  {/*<a
                      href={service.link}
                      className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400"
                    ></a>
                  <h1 className="text-xl font-bold">{service.name}</h1>/}
                  <Link to="/potato" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                    <h1 className="text-xl font-bold">{service.name}</h1>
                  </Link>
                  <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>*/}


           {/* First row of cards */}
                    <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
                      <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img11} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/potato" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Potato </h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img3} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/tea" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Tea</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      <div data-aos="fade-up" data-aos-delay="500" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img9} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/grapes" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Grapes</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      {/* Add more cards here if needed for the first row */}
                    </div>
          
          
                    {/* Second row of cards */}
                    <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
                      <div data-aos="fade-up" data-aos-delay="700" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img7} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/tomato" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Tomato</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
          
                      <div data-aos="fade-up" data-aos-delay="900" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img10} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/coffee" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Coffee</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
          
                      <div data-aos="fade-up" data-aos-delay="1100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img4} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/apple" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Apple</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      {/* Add more cards here if needed for the second row */}
                    </div>

                    {/* Third row of cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
                      <div data-aos="fade-up" data-aos-delay="1300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img12} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/chillie" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Chillie</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      <div data-aos="fade-up" data-aos-delay="1500" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img5} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/coconut" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Coconut</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      <div data-aos="fade-up" data-aos-delay="1700" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
                        <div className="h-[122px]">
                          <img src={Img8} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                        </div>
                        <div className="p-4 text-center">
                          <Link to="/cherry" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                            <h1 className="text-xl font-bold">Cherry</h1>
                          </Link>
                          <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                          By clicking on this column, you can learn about the diseases that can affect the plant and the remedies that can be taken for them.
                          </p>
                        </div>
                      </div>
          
                      {/* Add more cards here if needed for the first row */}
                    </div>


        </div>
      </div>
    </>
  );
};

export default Services;
