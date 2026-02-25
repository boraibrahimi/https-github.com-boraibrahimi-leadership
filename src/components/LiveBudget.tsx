import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { budgetData } from '@/data';
import { cn } from '@/lib/utils';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
};

export function LiveBudget() {
  const categories = Array.from(new Set(budgetData.map(item => item.category)));
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 bg-white/5">
              <th className="p-4 font-medium w-8"></th>
              <th className="p-4 font-medium">Item Name</th>
              <th className="p-4 font-medium">Details</th>
              <th className="p-4 font-medium text-right">Forecasted</th>
              <th className="p-4 font-medium text-right">Actual</th>
              <th className="p-4 font-medium text-right">Delta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {categories.map(category => {
              const items = budgetData.filter(i => i.category === category);
              const totalForecasted = items.reduce((sum, i) => sum + i.forecasted, 0);
              const totalActual = items.reduce((sum, i) => sum + i.actual, 0);
              const totalDelta = totalForecasted - totalActual;
              const isExpanded = expandedCategories.includes(category);

              return (
                <React.Fragment key={category}>
                  {/* Category Header Row */}
                  <tr 
                    onClick={() => toggleCategory(category)}
                    className="bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                  >
                    <td className="p-4 text-center">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </td>
                    <td className="p-4 font-bold text-white">
                      <span className={`inline-block px-2 py-1 rounded text-xs mr-2 ${
                        category === 'Transport' ? 'bg-blue-500/20 text-blue-300' :
                        category === 'Venue' ? 'bg-purple-500/20 text-purple-300' :
                        category === 'Food and beverage' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {category}
                      </span>
                      <span className="text-slate-400 font-normal text-xs">({items.length} items)</span>
                    </td>
                    <td className="p-4"></td>
                    <td className="p-4 text-right font-bold text-slate-200">{formatCurrency(totalForecasted)}</td>
                    <td className="p-4 text-right font-bold text-slate-200">{formatCurrency(totalActual)}</td>
                    <td className={`p-4 text-right font-bold ${totalDelta >= 0 ? 'text-emerald-400' : 'text-orange-300'}`}>
                      {totalDelta >= 0 ? '↗' : '↘'} {formatCurrency(Math.abs(totalDelta))}
                    </td>
                  </tr>

                  {/* Expanded Items */}
                  {isExpanded && items.map((item, idx) => {
                    const itemDelta = item.forecasted - item.actual;
                    return (
                      <tr key={`${category}-${idx}`} className="bg-black/20 hover:bg-black/30 transition-colors">
                        <td className="p-4"></td>
                        <td className="p-4 font-medium text-slate-300 pl-8">{item.details}</td>
                        <td className="p-4 text-slate-400 text-xs">{item.information || '-'}</td>
                        <td className="p-4 text-right text-slate-400">{formatCurrency(item.forecasted)}</td>
                        <td className="p-4 text-right text-slate-400">{formatCurrency(item.actual)}</td>
                        <td className={`p-4 text-right text-xs ${itemDelta >= 0 ? 'text-emerald-500' : 'text-orange-300'}`}>
                          {itemDelta >= 0 ? '↗' : '↘'} {formatCurrency(Math.abs(itemDelta))}
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
