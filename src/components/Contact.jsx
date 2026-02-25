import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, x: 120 }}   // 👈 Animate from RIGHT
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center py-20 px-6 lg:px-32 w-full"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>

      <p className="text-gray-500 mb-12 max-w-md mx-auto">
        We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600">
        
        {/* Name + Email */}
        <div className="flex flex-wrap gap-6">
          
          <div className="w-full md:w-[48%] text-left">
            <label className="block font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-black transition"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="w-full md:w-[48%] text-left">
            <label className="block font-medium">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-black transition"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

        </div>

        {/* Message */}
        <div className="mt-6 text-left">
          <label className="block font-medium">Your Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-40 resize-none focus:outline-none focus:border-black transition"
            name="message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 bg-blue-600 text-white py-3 px-8 rounded hover:bg-gray-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
