import React from "react";
import Button from "../components/ui/button";  // ✅ Correct relative path




import { motion } from "framer-motion";

const FeedbackForm = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900">
    <motion.div
      className="p-6 w-[400px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white text-center">Submit Your Feedback</h2>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Feedback"
          className="p-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        ></textarea>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
          Submit
        </Button>
      </form>
    </motion.div>
  </div>
);

export default FeedbackForm;
