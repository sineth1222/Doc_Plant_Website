import React from 'react'
//import Potato from "../Potato/potato";
import { Link } from "react-router-dom";  // Import Link
import Img13 from "../../assets/potato-earlybright.JPG";
import Img14 from "../../assets/potato-latebright.JPG";
import Img15 from "../../assets/potato-healthy.JPG";


const Potato = () => {
  return (
    <>
          <span id="potato"></span>
          <div className="py-10">
            <div className="container">
              {/* Heading section  */}
              <div className="mb-32 text-center">
                <h1 className="text-4xl font-bold text-gray-800 font-cursive">
                  Potato Plants Diseases
                </h1>
              </div>


              {/* First row of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img13} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_early_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Early Bright Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img14} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_late_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Late Bright Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img15} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_healthy" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Black Scurf & Stem Canker Disease</h1>
                </Link>
              </div>
            </div>

            {/* Add more cards here if needed for the first row /}
          </div>

          {/ Separator Header /}
          <div className="my-10 text-center">
            <h2 className="text-3xl font-semibold text-gray-700"></h2>
          </div>

          {/* Second row of cards /}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img13} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_early_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Early Bright</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img13} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_early_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Early Bright</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img13} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/potato_early_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Potato Early Bright</h1>
                </Link>
              </div>
            </div>*/}

            {/* Add more cards here if needed for the second row */}
          </div>


            </div>
          </div>
        </>
  )
}

export default Potato
