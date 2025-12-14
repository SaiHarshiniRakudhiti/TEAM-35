import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'framer-motion';
import { Save, Activity, Brain, Zap } from 'lucide-react';

const Slider = ({ label, icon: Icon, value, onChange, color }) => (
    <div className="space-y-3 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center text-slate-900 dark:text-white">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
                    <Icon size={20} className={color.replace('bg-', 'text-')} />
                </div>
                <span className="font-semibold">{label}</span>
            </div>
            <span className="font-bold text-lg">{value}/10</span>
        </div>
        <input
            type="range"
            min="1"
            max="10"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-slate-400">
            <span>Low</span>
            <span>High</span>
        </div>
    </div>
);

export default function Monitor() {
    const [mood, setMood] = useState(7);
    const [stress, setStress] = useState(3);
    const [energy, setEnergy] = useState(6);
    const [note, setNote] = useState('');

    const handleSave = () => {
        // Mock Save
        alert("Daily check-in saved!");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 md:p-10 space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Daily Check-in</h1>
                <p className="text-slate-500">Track your well-being to see your progress over time.</p>
            </header>

            <div className="space-y-4">
                <Slider
                    label="Mood"
                    icon={Brain}
                    value={mood}
                    onChange={setMood}
                    color="bg-purple-500"
                />
                <Slider
                    label="Stress Level"
                    icon={Activity}
                    value={stress}
                    onChange={setStress}
                    color="bg-red-500"
                />
                <Slider
                    label="Energy"
                    icon={Zap}
                    value={energy}
                    onChange={setEnergy}
                    color="bg-yellow-500"
                />
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 space-y-3">
                <label className="font-semibold text-slate-900 dark:text-white">Quick Note</label>
                <textarea
                    className="w-full h-24 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How was your day?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>

            <Button onClick={handleSave} className="w-full gap-2 text-lg h-12">
                <Save size={20} />
                Save Entry
            </Button>
        </div>
    );
}
