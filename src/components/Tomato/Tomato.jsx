import React from 'react'
import { Link } from "react-router-dom";  // Import Link
import Img1 from "../../assets/tomato-earlybright.JPG";
import Img2 from "../../assets/tomato-latebright.JPG";
import Img3 from "../../assets/tomato-bactirial.JPG";
import Img4 from "../../assets/tomato-leafmold.JPG";
import Img5 from "../../assets/tomato-mosic.JPG";
import Img6 from "../../assets/tomato-targetspot.JPG";
import Img7 from "../../assets/tomato-septorial.JPG";
import Img8 from "../../assets/tomato-spider.JPG";
import Img9 from "../../assets/tomato-yellow.JPG";

const Tomato = () => {
  return (
    <>

<span id="tomato"></span>
          <div className="py-10">
            <div className="container">
              {/* Heading section  */}
              <div className="mb-32 text-center">
                <h1 className="text-4xl font-bold text-gray-800 font-cursive">
                  Tomato Plants Diseases
                </h1>
              </div>


              {/* First row of cards */}
          <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img1} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_early_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Early Bright Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img2} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_late_bright" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Late Bright Disease</h1>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[200px]">
              <div className="h-[122px]">
                <img src={Img3} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_bactirial" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Bactirial Spot Disease</h1>
                </Link>
              </div>
            </div>

            {/* Add more cards here if needed for the first row */}
          </div>



          {/* Second row of cards */}
          <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="700" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img4} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_leaf_mold" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Leaf Mold Disease</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="900" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img5} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_mosic" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Mosaic Virus</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="1100" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img6} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_target_spot" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Target Spot Disease</h1>
                </Link>
              </div>
            </div>

            {/* Add more cards here if needed for the second row */}
          </div>


          {/* Second row of cards */}
          <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 md:gap-5 place-items-center">
            <div data-aos="fade-up" data-aos-delay="1300" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img7} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_septorial" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Septoria Leaf Spot Disease</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="1500" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img8} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_spider" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Spider Mite Disease</h1>
                </Link>
              </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="1700" className="rounded-2xl mb-20 bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] min-h-[250px]">
              <div className="h-[122px]">
                <img src={Img9} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <Link to="/tomato_yellow" className="inline-block px-4 py-4 text-xl text-gray-500 duration-200 hover:text-yellow-400">
                  <h1 className="text-xl font-bold">Tomato Yellow Leaf Curl Virus</h1>
                </Link>
              </div>
            </div>

            {/* Add more cards here if needed for the second row */}
          </div>


            </div>
          </div>
      
    </>
  )
}

export default Tomato
