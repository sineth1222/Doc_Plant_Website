import React from 'react'
import { Link } from "react-router-dom";  // Import Link
import Img1 from "../../assets/tea-blisterblight.jpeg";
import Img2 from "../../assets/tea-blisterblight2.jpg";
import Img3 from "../../assets/tea-grayblight.jpeg";
import Img4 from "../../assets/tea-grayblight2.jpg";
import Img5 from "../../assets/tea-grayblight3.jpg";
import Img6 from "../../assets/coffee-rust.jpg";

const Tea = () => {
  return (
    <>

<span id="Tea"></span>
          <div className="py-10">
            <div className="container">
              {/* Heading section  */}
              <div className="mb-32 text-center">
                <h1 className="text-4xl font-bold text-gray-800 font-cursive">
                  Tea Plants Diseases
                </h1>
              </div>


              {/* First row of cards */}
          <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img1} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Blister Blight Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img2} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Gray Blight Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img3} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Black Rot Disease</h1>
                </Link>
              </div>
            </div>
            
          </div>


           {/* Second row of cards */}
           <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="700" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img4} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Red Rust Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="900" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img5} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Bacterial Canker Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="1100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img1} alt="" className="max-w-[200px] h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tea Mosaic Disease</h1>
                </Link>
              </div>
            </div>
            
          </div>


            </div>
          </div>
      
    </>
  )
}

export default Tea
