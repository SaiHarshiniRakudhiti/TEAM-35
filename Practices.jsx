import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Heart, Music, Sun } from 'lucide-react';

const practices = [
    { id: 1, title: 'Deep Breathing', desc: '5 min • Calm your body', icon: Wind, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { id: 2, title: 'Gratitude Journal', desc: '3 min • Shift your focus', icon: Heart, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
    { id: 3, title: 'Calming Sounds', desc: '10 min • Sleep aid', icon: Music, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { id: 4, title: 'Morning Yoga', desc: '15 min • Energize', icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
];

export default function Practices() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Wellness Practices</h1>
                <p className="text-slate-500">Curated exercises to help you feel your best.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {practices.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-surface p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer flex items-center gap-6 group"
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.bg}`}>
                            <item.icon size={32} className={item.color} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
