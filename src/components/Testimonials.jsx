import React from "react";
import { testimonialsData, assets } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, x: -120 }}   // 👈 Start from LEFT
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto py-16 px-4 lg:px-32 w-full"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Customer{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Real stories from those who found their perfect home with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white w-full max-w-[350px] border border-gray-200 shadow-md rounded-2xl px-8 py-10 text-center hover:shadow-2xl transition-all duration-300"
          >
            {/* Profile Image */}
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              src={testimonial.image}
              alt={testimonial.alt || testimonial.name}
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>

            {/* Title */}
            <p className="text-gray-500 text-sm mb-3">
              {testimonial.title}
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from(
                { length: Math.min(testimonial.rating, 5) },
                (_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                )
              )}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
