import React from 'react';
import { BarChart2, Calendar as CalIcon, TrendingUp } from 'lucide-react';

export default function Progress() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Your Journey</h1>
                <p className="text-slate-500">See how far you've come.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Stat Cards */}
                <div className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-2 text-slate-500">
                        <CalIcon size={18} />
                        <span className="text-sm font-medium">Streak</span>
                    </div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white">5 Days</div>
                </div>
                <div className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-2 text-slate-500">
                        <TrendingUp size={18} />
                        <span className="text-sm font-medium">Mood Avg</span>
                    </div>
                    <div className="text-4xl font-bold text-green-500">7.2</div>
                </div>
                <div className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-2 text-slate-500">
                        <BarChart2 size={18} />
                        <span className="text-sm font-medium">Sessions</span>
                    </div>
                    <div className="text-4xl font-bold text-blue-500">12</div>
                </div>

                {/* Main Chart Placeholder */}
                <div className="col-span-full bg-surface p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-lg mb-6">Mood History</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 50, 45, 60, 55, 70, 65, 80, 75, 85, 80, 90].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg group relative">
                                <div
                                    className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-lg"
                                    style={{ height: `${h}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400">
                        <span>Oct 1</span>
                        <span>Oct 15</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
