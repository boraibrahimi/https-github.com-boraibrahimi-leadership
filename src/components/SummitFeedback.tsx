import { Star } from 'lucide-react';

export function SummitFeedback() {
  const details = [
    { score: 4.2, label: "Communication & Logistics" },
    { score: 4.3, label: "Location & Hotel" },
    { score: 4.1, label: "Logistics & Transportation" },
    { score: 3.2, label: "Food & Dining Experience" },
    { score: 3.1, label: "Gadget Satisfaction" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group overflow-hidden rounded-2xl bg-indigo-900 p-8 text-center shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-indigo-950 opacity-100" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <Star className="w-12 h-12 text-yellow-400 fill-yellow-400 mb-4 drop-shadow-lg" />
            <h3 className="text-lg font-medium opacity-90 mb-2 uppercase tracking-wider">Overall Summit Experience</h3>
            <div className="text-7xl font-bold tracking-tighter flex items-baseline gap-2">
              8.4 <span className="text-2xl font-normal opacity-60">/10</span>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl bg-slate-900 p-8 text-center shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-100" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <Star className="w-12 h-12 text-blue-400 fill-blue-400 mb-4 drop-shadow-lg" />
            <h3 className="text-lg font-medium opacity-90 mb-2 uppercase tracking-wider">Agenda Quality & Flow</h3>
            <div className="text-7xl font-bold tracking-tighter flex items-baseline gap-2">
              8.1 <span className="text-2xl font-normal opacity-60">/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {details.map((item, idx) => (
          <div key={idx} className="rounded-xl bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-white mb-2 flex items-baseline justify-center gap-1">
              {item.score} <span className="text-lg font-normal text-slate-400">/5</span>
            </div>
            <p className="text-sm text-slate-300 font-medium leading-tight">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
