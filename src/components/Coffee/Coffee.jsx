import React from 'react'
import { Link } from "react-router-dom";  // Import Link
import Img1 from "../../assets/coffee-redspidermite.jpg";
import Img2 from "../../assets/coffee-rust.jpg";

const Coffee = () => {
  return (
    <>

<span id="coffee"></span>
          <div className="py-10">
            <div className="container">
              {/* Heading section  */}
              <div className="mb-32 text-center">
                <h1 className="text-4xl font-bold text-gray-800 font-cursive">
                  Coffee Plants Diseases
                </h1>
              </div>


              {/* First row of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img1} alt="" className="w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/coffee_spider_mite" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Coffee Red Spider Mite Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img2} alt="" className="w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/coffee_rust" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Coffee rust Disease</h1>
                </Link>
              </div>
            </div>

            </div>


            </div>
          </div>
      
    </>
  )
}

export default Coffee
