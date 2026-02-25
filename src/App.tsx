/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Section } from '@/components/Section';
import { SummitFeedback } from '@/components/SummitFeedback';
import { GarbWorkshop } from '@/components/GarbWorkshop';
import { ExecutiveDashboard } from '@/components/ExecutiveDashboard';
import { LiveBudget } from '@/components/LiveBudget';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-32 pt-10"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-indigo-300 uppercase tracking-widest">
            2026 Overview
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Leadership Dashboard
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your central space for FeedForward insights, GARB Workshop, and budget visibility.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8 pb-20">
          <Section 
            title="Summit Feedback" 
            subtitle="Post-event analysis and GARB workshop results."
            defaultExpanded={true}
          >
            <SummitFeedback />
          </Section>

          <Section 
            title="Feedforward" 
            subtitle="GARB Workshop"
          >
            <GarbWorkshop />
          </Section>

          <Section 
            title="Budget Overview" 
            subtitle="LevelUp Summit 2026 Financial Overview"
          >
            <ExecutiveDashboard />
          </Section>

          <div className="flex justify-center pt-12 pb-8">
            <a 
              href="https://miro.com/app/board/uXjVJ85oBfo=/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFD02F] text-black font-bold text-lg rounded-full hover:bg-[#F5C400] transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,208,47,0.3)] hover:shadow-[0_0_30px_rgba(255,208,47,0.5)]"
            >
              Core Summit Team Feedforward
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
