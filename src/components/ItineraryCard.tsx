"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Car, ExternalLink, Calendar } from "lucide-react";

interface ItineraryCardProps {
  mbti: string;
  painPoints: string[];
  onBook: () => void;
}

export default function ItineraryCard({ mbti, painPoints, onBook }: ItineraryCardProps) {
  // Mock logic based on props
  const getLogic = () => {
    let logic = `Since you are an ${mbti}`;
    if (painPoints.includes("walking")) {
      logic += " and hate long walks, we prioritized spots accessible by taxi.";
    } else if (painPoints.includes("crowds")) {
      logic += " and dislike crowds, we chose hidden gems during off-peak hours.";
    } else {
      logic += ", we curated a balanced mix of activity and rest.";
    }
    return logic;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 overflow-hidden"
      >
        <div className="p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Kyoto, Japan</h2>
              <p className="text-gray-500 flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4" /> 3 Days • Relaxed Pace
              </p>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
              98% Match
            </div>
          </div>

          <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex gap-3">
            <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-indigo-900 text-sm leading-relaxed">
              <strong>AI Logic:</strong> {getLogic()}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 border-b pb-2">Day 1: Arashiyama (The Lazy Way)</h3>
            
            <div className="flex gap-4 items-start group">
              <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                 {/* Placeholder for image */}
                 <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=150&q=80')]"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">Tenryu-ji Temple</h4>
                  <span className="text-xs text-gray-400">10:00 AM</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Private garden view.
                  {painPoints.includes("walking") && <span className="text-pink-600 ml-1 block text-xs font-medium"><Car className="w-3 h-3 inline mr-1"/>Direct taxi access arranged.</span>}
                </p>
              </div>
            </div>

             <div className="flex gap-4 items-start group">
              <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                 <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1554797589-7241bb691973?w=150&q=80')]"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">% Arabica Coffee</h4>
                  <span className="text-xs text-gray-400">12:30 PM</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Pre-ordered seat overlooking the river.
                  {painPoints.includes("waiting") && <span className="text-pink-600 ml-1 block text-xs font-medium"><Coffee className="w-3 h-3 inline mr-1"/>Skip-the-line pass included.</span>}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onBook}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Review & Book
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
