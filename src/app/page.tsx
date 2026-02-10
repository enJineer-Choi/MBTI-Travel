"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "@/components/Landing";
import Onboarding from "@/components/Onboarding";
import ItineraryCard from "@/components/ItineraryCard";
import BookingCart from "@/components/BookingCart";

type ViewState = "landing" | "onboarding" | "itinerary" | "booking";

export default function Home() {
  const [view, setView] = useState<ViewState>("landing");
  const [userData, setUserData] = useState<{ mbti: string; painPoints: string[] }>({
    mbti: "",
    painPoints: [],
  });

  const handleOnboardingComplete = (data: { mbti: string; painPoints: string[] }) => {
    setUserData(data);
    setView("itinerary");
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] relative overflow-hidden font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Background Decorative Elements - Soft Organic Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply filter animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply filter animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply filter animate-blob animation-delay-4000" />

      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {view === "landing" && (
            <motion.div
              key="landing"
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <Landing onStart={() => setView("onboarding")} />
            </motion.div>
          )}

          {view === "onboarding" && (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <Onboarding onComplete={handleOnboardingComplete} />
            </motion.div>
          )}

          {view === "itinerary" && (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex items-center justify-center min-h-screen p-4"
            >
              <ItineraryCard
                mbti={userData.mbti}
                painPoints={userData.painPoints}
                onBook={() => setView("booking")}
              />
            </motion.div>
          )}

          {view === "booking" && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center min-h-screen p-4"
            >
              <BookingCart onReset={() => setView("landing")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}