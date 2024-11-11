"use client";

import { motion } from "framer-motion";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export default function PricingSection() {
  const stripe = useStripe();

  const handleCheckout = async (priceId) => {
    try {
      const response = await axios.post("/api/checkout", { priceId });
      const { sessionId } = response.data;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    }
  };

  return (
    <section className="relative font-sans w-screen md:w-full bg-black text-white py-16 px-4 flex flex-col items-center overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 w-full max-w-5xl">
        {/* $499 Pricing Box - Unavailable */}
        <motion.div
          className="p-8 rounded-lg bg-gradient-to-b from-purple-900 to-black text-center shadow-lg flex-1 mx-4 border-2 border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-gray-400 mb-4 border-b-4 border-gray-600 inline-block">
            $499
          </h2>
          <div className="h-[2px] bg-gray-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8 text-gray-500">
            <li>- 1 Month Cohort</li>
            <li>- 15 hours CALLS</li>
            <li>- Discord Community Access as Level 1</li>
          </ul>
          <button
            className="mt-4 py-3 px-6 rounded-full bg-gray-600 text-gray-400 text-xl font-semibold cursor-not-allowed"
            disabled
          >
            Currently Unavailable
          </button>
        </motion.div>

        {/* $1499 Pricing Box - Available */}
        <motion.div
          className="p-8 rounded-lg bg-gradient-to-b from-purple-900 to-black text-center shadow-lg flex-1 mx-4 border-2 border-transparent"
          whileHover={{
            scale: 1.03,
            borderColor: "#34D399",
            transition: { duration: 0.3 },
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 border-b-4 border-light-purple inline-block">
            $1499
          </h2>
          <div className="h-[2px] bg-purple-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8">
            <li>- 3 Month Cohort</li>
            <li>- 30 hours CALLS</li>
            <li>- Discord Community Access as Level 2</li>
            <li>- Live Recordings</li>
            <li>- PDF RESOURCES</li>
            <li>- Secret E-BOOK</li>
          </ul>
          <motion.button
            className="mt-4 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleCheckout("price_1PvPItSB8NyItH1JPKkihHTF")} // Replace with actual price ID
          >
            Get Access Now!
          </motion.button>
        </motion.div>

        {/* $14999 Pricing Box - Unavailable */}
        <motion.div
          className="p-8 rounded-lg bg-gradient-to-b from-purple-500 to-black text-center shadow-lg flex-1 mx-4 border-2 border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-5xl font-bold text-gray-400 mb-4 border-b-4 border-gray-600 inline-block">
            $14999
          </h2>
          <div className="h-[2px] bg-gray-500 mb-4"></div>
          <ul className="text-lg space-y-2 mb-8 text-gray-500">
            <li>
              - Build A Profitable YTA channel generating $1k-$5k/month within
              next 6 months
            </li>
            <li>- Everything in the $1499 Cohort</li>
          </ul>
          <button
            className="mt-4 py-3 px-6 rounded-full bg-gray-600 text-gray-400 text-xl font-semibold cursor-not-allowed"
            disabled
          >
            Currently Unavailable
          </button>
        </motion.div>
      </div>
    </section>
  );
}
