import React from "react";
import { assets } from "../assets/assets";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <Motion.section
      id="about"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-28 container mx-auto px-6 md:px-20 lg:px-32 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Our Brand
          </span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Passionate about properties, dedicated to turning your vision into reality.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.brand_img}
            alt="Our Brand"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Text + Stats */}
        <div className="w-full md:w-1/2 text-gray-600">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-4xl font-semibold text-gray-900">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-gray-900">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-gray-900">20+</p>
              <p className="text-sm">Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-gray-900">25+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 leading-relaxed">
            We bring years of industry expertise and a commitment to excellence in every
            project we undertake. From innovative design to flawless execution, our goal
            is to create spaces that inspire and deliver long-term value.
          </p>

          {/* Button */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </Motion.section>
  );
};

export default About;
