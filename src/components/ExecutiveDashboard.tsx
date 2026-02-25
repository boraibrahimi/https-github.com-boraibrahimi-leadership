import { useState } from 'react';
import { Wallet, TrendingUp, PiggyBank, ChevronDown, ChevronUp } from 'lucide-react';
import { budgetData } from '@/data';
import { LiveBudget } from './LiveBudget';
import { motion, AnimatePresence } from 'motion/react';

// Helper to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
};

export function ExecutiveDashboard() {
  const [isBudgetExpanded, setIsBudgetExpanded] = useState(false);

  // Calculate summary data from budgetData
  const categories = Array.from(new Set(budgetData.map(item => item.category)));
  
  const summary = categories.map(cat => {
    const items = budgetData.filter(i => i.category === cat);
    const budgeted = items.reduce((sum, i) => sum + i.forecasted, 0);
    const actual = items.reduce((sum, i) => sum + i.actual, 0);
    const delta = budgeted - actual;
    const usage = budgeted === 0 ? 0 : (actual / budgeted) * 100;
    
    return {
      category: cat,
      budgeted,
      actual,
      delta,
      usage
    };
  });

  const totalBudget = summary.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = summary.reduce((sum, item) => sum + item.actual, 0);
  const remaining = totalBudget - totalSpent;
  const totalUsage = (totalSpent / totalBudget) * 100;

  return (
    <div className="space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Actual (moved to 1st) */}
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 p-6 shadow-lg">
          <div className="absolute right-4 top-4 p-3 bg-white/20 rounded-xl backdrop-blur-md">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">Total Actual</p>
          <h3 className="text-4xl font-bold text-white mb-1">{formatCurrency(totalSpent)}</h3>
          <p className="text-indigo-200 text-sm">Actual expenses</p>
        </div>

        {/* Total Forecasted (moved to 2nd, Yellow, White text) */}
        <div className="relative overflow-hidden rounded-2xl bg-yellow-500 p-6 shadow-lg">
          <div className="absolute right-4 top-4 p-3 bg-white/20 rounded-xl backdrop-blur-md">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/90 text-sm font-medium uppercase tracking-wider mb-1">Total Forecasted</p>
          <h3 className="text-4xl font-bold text-white mb-1">{formatCurrency(totalBudget)}</h3>
          <p className="text-white/80 text-sm">Budgeted amount</p>
        </div>

        {/* Delta (was Remaining Budget, Light Orange) */}
        <div className="relative overflow-hidden rounded-2xl bg-orange-400 p-6 shadow-lg">
          <div className="absolute right-4 top-4 p-3 bg-white/20 rounded-xl backdrop-blur-md">
            <PiggyBank className="w-6 h-6 text-white" />
          </div>
          <p className="text-orange-50 text-sm font-medium uppercase tracking-wider mb-1">Delta</p>
          <h3 className="text-4xl font-bold text-white mb-1">{formatCurrency(remaining)}</h3>
          <p className="text-orange-100 text-sm">Variance</p>
        </div>
      </div>

      {/* Category Summary Table */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">Category Summary</h3>
          <p className="text-slate-400 text-sm">Click a category to view detailed transactions</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium text-right">Budgeted</th>
                <th className="p-4 font-medium text-right">Actual</th>
                <th className="p-4 font-medium text-right">Delta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {summary.map((row) => (
                <tr key={row.category} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 font-medium text-white">{row.category}</td>
                  <td className="p-4 text-right text-slate-300">{formatCurrency(row.budgeted)}</td>
                  <td className="p-4 text-right text-slate-300">{formatCurrency(row.actual)}</td>
                  <td className={`p-4 text-right font-medium ${row.delta >= 0 ? 'text-emerald-400' : 'text-orange-300'}`}>
                    {row.delta >= 0 ? '↗' : '↘'} {formatCurrency(Math.abs(row.delta))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expanded Budget Toggle */}
      <div className="pt-4">
        <button
          onClick={() => setIsBudgetExpanded(!isBudgetExpanded)}
          className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-300 transition-colors group w-full"
        >
          <span>Expanded Budget</span>
          <div className={`p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 ${isBudgetExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
          <div className="h-px flex-1 bg-white/10 group-hover:bg-white/20 transition-colors ml-4" />
        </button>

        <AnimatePresence>
          {isBudgetExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 32 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <LiveBudget />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
