"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, Users, Brain, Heart, Zap, Coffee, Footprints, Clock, UserX, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingProps {
  onComplete: (data: { mbti: string; painPoints: string[] }) => void;
}

const MBTI_PAIRS = [
  {
    trait: "Energy",
    options: [
      { id: "E", label: "Extrovert", desc: "Energy from others", icon: Users },
      { id: "I", label: "Introvert", desc: "Energy from solitude", icon: User },
    ],
  },
  {
    trait: "Mind",
    options: [
      { id: "S", label: "Sensing", desc: "Focus on reality", icon: Footprints },
      { id: "N", label: "Intuition", desc: "Focus on ideas", icon: Brain },
    ],
  },
  {
    trait: "Nature",
    options: [
      { id: "T", label: "Thinking", desc: "Logic & Consistency", icon: Zap },
      { id: "F", label: "Feeling", desc: "People & Values", icon: Heart },
    ],
  },
  {
    trait: "Tactics",
    options: [
      { id: "J", label: "Judging", desc: "Planned & Organized", icon: Clock },
      { id: "P", label: "Prospecting", desc: "Flexible & Spontaneous", icon: Coffee },
    ],
  },
];

const PAIN_POINTS = [
  { id: "walking", label: "Too much walking", icon: Footprints },
  { id: "waiting", label: "Long wait times", icon: Clock },
  { id: "crowds", label: "Crowded places", icon: UserX },
  { id: "budget", label: "Over-budget", icon: Wallet },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [mbti, setMbti] = useState<{ [key: string]: string }>({});
  const [painPoints, setPainPoints] = useState<string[]>([]);

  const handleMbtiSelect = (traitIndex: number, value: string) => {
    setMbti((prev) => ({ ...prev, [traitIndex]: value }));
  };

  const togglePainPoint = (id: string) => {
    setPainPoints((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const getMbtiString = () => {
    return [0, 1, 2, 3].map((i) => mbti[i] || "-").join("");
  };

  const isMbtiComplete = Object.keys(mbti).length === 4;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-3xl mx-auto w-full">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What&apos;s your MBTI?</h2>
              <p className="text-gray-500">We need this to calibrate your energy levels.</p>
            </div>

            <div className="grid gap-6">
              {MBTI_PAIRS.map((pair, idx) => (
                <div key={pair.trait} className="flex gap-4 justify-center">
                  {pair.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleMbtiSelect(idx, opt.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 w-32 sm:w-40 rounded-2xl border-2 transition-all duration-200",
                        mbti[idx] === opt.id
                          ? "border-purple-600 bg-purple-50 text-purple-700 shadow-md transform scale-105"
                          : "border-gray-100 bg-white hover:border-purple-200 hover:bg-gray-50 text-gray-600"
                      )}
                    >
                      <opt.icon className="w-6 h-6" />
                      <div className="font-semibold">{opt.label}</div>
                      <div className="text-xs opacity-80">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <button
                disabled={!isMbtiComplete}
                onClick={() => setStep(2)}
                className="px-8 py-3 rounded-full bg-black text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Past Travel Trauma?</h2>
              <p className="text-gray-500">Select what ruined your previous trips.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PAIN_POINTS.map((pt) => (
                <button
                  key={pt.id}
                  onClick={() => togglePainPoint(pt.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 aspect-square",
                    painPoints.includes(pt.id)
                      ? "border-pink-500 bg-pink-50 text-pink-700 shadow-md"
                      : "border-gray-100 bg-white hover:border-pink-200 hover:bg-gray-50 text-gray-600"
                  )}
                >
                  <pt.icon className="w-8 h-8" />
                  <div className="font-semibold text-center">{pt.label}</div>
                  {painPoints.includes(pt.id) && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-5 h-5 text-pink-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-8">
                <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full text-gray-500 hover:bg-gray-100 font-semibold transition-colors"
                >
                    Back
                </button>
              <button
                onClick={() => onComplete({ mbti: getMbtiString(), painPoints })}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Generate Fail-Safe Itinerary
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
