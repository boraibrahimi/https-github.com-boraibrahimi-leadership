import React from 'react';
import { ThumbsUp, AlertTriangle, XCircle, Lightbulb } from 'lucide-react';
import { garbData } from '@/data';
import { cn } from '@/lib/utils';

interface GarbCardProps {
  title: string;
  items: { title: string; desc: string }[];
  icon: React.ElementType;
  colorClass: string;
  headerClass: string;
}

function GarbColumn({ title, items, icon: Icon, colorClass, headerClass }: GarbCardProps) {
  return (
    <div className={cn("rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col h-full", colorClass)}>
      <div className={cn("p-4 flex items-center gap-3", headerClass)}>
        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg leading-tight">{title}</h3>
        </div>
      </div>
      <div className="p-4 space-y-4 flex-1">
        {items.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <h4 className="font-bold text-white mb-1">{item.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GarbWorkshop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <GarbColumn 
        title="Continue" 
        items={garbData.keep} 
        icon={ThumbsUp} 
        colorClass="hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] transition-shadow duration-500"
        headerClass="bg-emerald-500"
      />
      <GarbColumn 
        title="Improve" 
        items={garbData.improve} 
        icon={AlertTriangle} 
        colorClass="hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] transition-shadow duration-500"
        headerClass="bg-amber-500"
      />
      <GarbColumn 
        title="Stop" 
        items={garbData.stop} 
        icon={XCircle} 
        colorClass="hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)] transition-shadow duration-500"
        headerClass="bg-red-500"
      />
      <GarbColumn 
        title="Imagine" 
        items={garbData.dream} 
        icon={Lightbulb} 
        colorClass="hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transition-shadow duration-500"
        headerClass="bg-blue-500"
      />
    </div>
  );
}
