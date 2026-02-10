"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Smile } from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-700 bg-purple-100/50 rounded-full backdrop-blur-sm border border-purple-200">
          <ShieldCheck className="w-4 h-4" />
          <span>No more travel failures</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          FailSafe <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Travel</span>
        </h1>

        <p className="text-xl text-gray-600">
          Zero-Stress Travel Planning based on your MBTI and past travel trauma.
          We build the itinerary that actually works for <em>you</em>.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all shadow-lg rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/30"
        >
          Start My Fail-Safe Trip
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-500">
            <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <Smile className="w-6 h-6 text-purple-500"/>
                </div>
                <span>MBTI Aligned</span>
            </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <ShieldCheck className="w-6 h-6 text-pink-500"/>
                </div>
                <span>Trauma Free</span>
            </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="font-bold text-lg text-indigo-500">AI</div>
                </div>
                <span>Smart Logic</span>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
