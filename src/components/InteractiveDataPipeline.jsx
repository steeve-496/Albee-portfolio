import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const InteractiveDataPipeline = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [pipelineProgress, setPipelineProgress] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  const stages = [
    {
      title: "Data Ingestion & Extraction",
      metric: "10,000+ Raw Records",
      tech: "SQL • Python • Excel",
      desc: "Aggregating unstructured multi-source datasets, setting schema validations, and auditing entry points.",
      accuracy: 64,
      hygiene: 55,
      records: 10000,
    },
    {
      title: "EDA & Anomaly Mitigation",
      metric: "Zero Null Discrepancies",
      tech: "Pandas • NumPy • Seaborn",
      desc: "Identifying statistical anomalies, handling outliers, skewness mitigation, and exploratory trend mapping.",
      accuracy: 78,
      hygiene: 82,
      records: 9840,
    },
    {
      title: "Guideline Annotation & QA",
      metric: "99.4% Guideline Conformity",
      tech: "Innodata / Han Digital Protocols",
      desc: "Multi-tiered peer validation, intent tagging, conversational entity labeling for NLP training datasets.",
      accuracy: 91,
      hygiene: 96,
      records: 9840,
    },
    {
      title: "Model Evaluation & Benchmarking",
      metric: "High Confidence Benchmark",
      tech: "Scikit-learn • RNN • Claude/OpenAI APIs",
      desc: "Final precision/recall scoring, stress testing across edge-case dialogues, and automated stakeholder reporting.",
      accuracy: 97.2,
      hygiene: 99.8,
      records: 9840,
    },
  ];

  const runSimulation = () => {
    setIsRunning(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < stages.length) {
        setActiveStage(step);
        setPipelineProgress(((step + 1) / stages.length) * 100);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        confetti({
          particleCount: 35,
          spread: 55,
          origin: { y: 0.7 },
          colors: ["#2dd4bf", "#f59e0b", "#34d399"],
        });
      }
    }, 850);
  };

  const resetSimulation = () => {
    setActiveStage(0);
    setPipelineProgress(25);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-4 sm:p-6 md:p-8 backdrop-blur-sm shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-mono text-teal-400">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            Interactive ML Pipeline Simulation
          </div>
          <h3 className="mt-2 text-lg sm:text-xl font-bold text-white tracking-tight">
            Live AI Data & Analytics Simulator
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Explore how raw records translate into production-ready AI models under Albee's workflow.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              isRunning
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-teal-400 text-zinc-950 hover:bg-teal-300 shadow-sm shadow-teal-500/20 active:scale-95"
            }`}
          >
            <Play className={`h-3.5 w-3.5 ${isRunning ? "animate-spin" : ""}`} />
            {isRunning ? "Running..." : "Simulate Flow"}
          </button>
          <button
            onClick={resetSimulation}
            disabled={isRunning}
            className="rounded-xl border border-zinc-800 p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Pipeline Stages Progress Bar */}
      <div className="mt-5 sm:mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stages.map((stage, idx) => {
            const isCurrent = activeStage === idx;
            const isCompleted = activeStage > idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveStage(idx);
                  setPipelineProgress(((idx + 1) / stages.length) * 100);
                }}
                className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? "border-teal-500/40 bg-teal-500/10 text-white"
                    : isCompleted
                    ? "border-emerald-500/30 bg-emerald-500/5 text-zinc-300"
                    : "border-zinc-800/80 bg-zinc-900/30 text-zinc-500 hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <span>STAGE 0{idx + 1}</span>
                  {isCompleted && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
                </div>
                <div className="mt-1 font-semibold text-xs truncate">
                  {stage.title.split(" ")[0]} {stage.title.split(" ")[1]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="mt-5 sm:mt-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 sm:p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-mono text-teal-400">
                ACTIVE PHASE: STAGE 0{activeStage + 1}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                {stages[activeStage].title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {stages[activeStage].desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 items-center text-xs">
                <span className="text-zinc-500 font-mono">Stack:</span>
                <span className="rounded-md bg-zinc-800/60 px-2 py-0.5 sm:px-2.5 sm:py-1 text-zinc-300 font-mono border border-zinc-700/40 text-[11px] sm:text-xs">
                  {stages[activeStage].tech}
                </span>
              </div>
            </div>

            {/* Metrics visual pill */}
            <div className="flex flex-col gap-2.5 sm:gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">Benchmark Score</span>
                <span className="text-xs sm:text-sm font-bold text-teal-400 font-mono">
                  {stages[activeStage].accuracy}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-amber-300"
                  initial={{ width: 0 }}
                  animate={{ width: `${stages[activeStage].accuracy}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs text-zinc-400">
                <span>Data Hygiene</span>
                <span className="text-emerald-400 font-mono">{stages[activeStage].hygiene}%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Dataset Scale</span>
                <span className="text-zinc-200 font-mono">{stages[activeStage].records.toLocaleString()} rows</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
