import React from "react";
import HeroPng from "../../assets/park.png";
import { PiPlantFill } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      {/*<div className="min-h-[550px] sm:min-h-[700px] bg-brandDark flex justify-center items-center text-white bg-[url('../../assets/bg.jpg')] bg-cover bg-center bg-no-repeat">*/}
      <div className="min-h-[550px] sm:min-h-[680px] flex justify-center items-center text-white bg-[url('assets/bg.jpg')] bg-cover bg-center bg-no-repeat" >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center order-2 gap-6 pt-12 text-center sm:pt-0 sm:text-left sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl font-bold sm:text-6xl lg:text-7xl"
              >
                We wil provide a{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Solution
                </span>{" "}
                for your plants.
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="flex gap-2 px-4 py-2 text-white duration-200 border-2 rounded-full bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105">
                  Know More
                  <PiPlantFill className="text-xl text-white cursor-pointer drop-shadow-sm" />
                </button>
              </div>
            </div>
            {/* Image section */}
            {/*<div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-left"
                className="absolute p-3 bg-gradient-to-r from-primary to-secondary rounded-xl top-10 left-10"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="absolute p-3 bg-gradient-to-r from-primary to-secondary rounded-xl bottom-10 right-10"
              >
                <h1 className="text-white">Best Coffee</h1>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
