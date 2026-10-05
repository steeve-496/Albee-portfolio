import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing workspace...");

  useEffect(() => {
    let currentProgress = 0;
    const steps = [
      { at: 20, text: "Configuring pipeline schemas..." },
      { at: 45, text: "Indexing 10,000+ annotations..." },
      { at: 75, text: "Synthesizing ML metrics..." },
      { at: 92, text: "Calibrating interface..." },
      { at: 100, text: "Workspace ready." },
    ];

    const timer = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 6;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText("Workspace ready.");
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 280);
      } else {
        setProgress(currentProgress);
        const currentStep = steps.find((s) => currentProgress <= s.at);
        if (currentStep) {
          setStatusText(currentStep.text);
        }
      }
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090a0d] px-6 text-zinc-100"
    >
      {/* Ambient Teal/Warm Amber glow */}
      <div className="absolute w-[450px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Animated Badge */}
        <div className="flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1 text-xs font-mono text-teal-400 mb-6">
          <Terminal className="h-3.5 w-3.5 animate-pulse" />
          <span>ALBEE_OS // v2.6.0</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
          Albee C John
        </h2>
        <p className="text-xs font-mono text-zinc-400 mb-8">
          Data Analyst • Data Science • AI Annotator
        </p>

        {/* Progress bar container */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-full h-1.5 overflow-hidden mb-4 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-300 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text & percentage */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-zinc-400">
          <span className="truncate pr-2">{statusText}</span>
          <span className="text-teal-400 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
