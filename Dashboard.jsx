import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Sun, CheckCircle, Plus } from 'lucide-react';

export default function Dashboard() {
    const { theme } = useTheme();

    // Mild: Simple tasks, mood
    // Moderate: Top/Day/Bottom tasks
    // Severe: Doctor-led

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-5xl mx-auto">

            {/* Header */}
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        Good Morning, Sarah
                    </h1>
                    <p className="text-slate-500">
                        {theme === 'mild' && "Ready for a calm day?"}
                        {theme === 'moderate' && "Let's find your balance."}
                        {theme === 'severe' && "You are safe here."}
                    </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                    <Sun className="text-yellow-500" />
                </div>
            </header>

            {/* Dynamic Content Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Widget 1: Daily Focus (Tasks) */}
                <motion.div
                    className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm col-span-2 lg:col-span-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Daily Focus</h3>
                        <Button variant="ghost" size="sm"><Plus size={16} /></Button>
                    </div>

                    <div className="space-y-3">
                        {/* Task Item */}
                        <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors group cursor-pointer">
                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-primary transition-colors" />
                            <span className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Morning Breathing Exercise</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors group cursor-pointer">
                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-primary transition-colors" />
                            <span className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Log your mood</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors group cursor-pointer">
                            <CheckCircle className="text-green-500 w-6 h-6" />
                            <span className="text-slate-400 line-through">Drink water</span>
                        </div>
                    </div>
                </motion.div>

                {/* Widget 2: AI Companion Quick Chat */}
                <motion.div
                    className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex flex-col items-center justify-center text-center space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <div className="w-12 h-12 bg-primary rounded-full animate-pulse opacity-80" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">Chat with Hope</h3>
                        <p className="text-xs text-slate-500 mt-1">Ready to listen anytime</p>
                    </div>
                    <Button variant="primary" size="sm" className="w-full">Start Chat</Button>
                </motion.div>

                {/* Widget 3: Progress / Monitoring */}
                <motion.div
                    className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Mood Tracker</h3>
                    <div className="flex justify-between items-end h-32 gap-2">
                        {[40, 60, 30, 80, 50, 70, 60].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden group">
                                <div
                                    className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-colors rounded-lg"
                                    style={{ height: `${h}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
