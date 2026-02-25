import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive cards
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= projectsData.length - (cardsToShow - 1)
        ? 0
        : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? projectsData.length - cardsToShow
        : prevIndex - 1
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, x: 120 }}   // 👈 from right
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-6 md:px-20 lg:px-32 py-16 my-20"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Completed
          </span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Crafting spaces, building legacies — explore our portfolio.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl shadow-md"
              />

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="bg-white w-3/4 px-4 py-3 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price}
                    <span className="px-1">|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
