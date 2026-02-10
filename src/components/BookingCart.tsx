"use client";

import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";

interface BookingCartProps {
    onReset: () => void;
}

export default function BookingCart({ onReset }: BookingCartProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white text-center">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Itinerary Locked</h2>
          <p className="text-purple-100 opacity-90">Your Fail-Safe trip is ready to book.</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Booking Summary</h3>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">A</div>
                <div>
                  <div className="font-semibold text-gray-900">Agoda</div>
                  <div className="text-xs text-gray-500">Kyoto Hotel Reservation</div>
                </div>
              </div>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                Pay $240 <ExternalLink className="w-3 h-3"/>
              </a>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">C</div>
                <div>
                  <div className="font-semibold text-gray-900">CatchTable</div>
                  <div className="text-xs text-gray-500">% Arabica Reservation</div>
                </div>
              </div>
              <a href="#" className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2">
                Reserve <ExternalLink className="w-3 h-3"/>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 text-center">
             <p className="text-sm text-gray-500 mb-6">
                Payments are processed securely by our partners. We just ensure you don&apos;t fail.
             </p>
             <button 
                onClick={onReset}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium underline decoration-gray-300 underline-offset-4"
             >
                Start Over
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
