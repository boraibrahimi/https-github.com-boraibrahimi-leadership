import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export function Section({ title, subtitle, children, defaultExpanded = false, className }: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative w-full max-w-7xl mx-auto mb-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500",
        isExpanded ? "bg-white/10" : "hover:bg-white/10",
        className
      )}
    >
      <div className="p-8 flex items-start justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-400 text-lg font-light">
              {subtitle}
            </p>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all active:scale-95"
        >
          <ChevronRight 
            className={cn(
              "w-6 h-6 text-white transition-transform duration-300",
              isExpanded ? "rotate-90" : "group-hover:translate-x-0.5"
            )} 
          />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 pt-0">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
