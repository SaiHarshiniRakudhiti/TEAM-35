import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Smile, User, Bot, Sparkles, Check } from 'lucide-react';

const avatars = [
    { id: 'av1', icon: <User size={32} />, label: 'Calm' },
    { id: 'av2', icon: <Smile size={32} />, label: 'Joy' },
    { id: 'av3', icon: <User size={32} className="text-primary" />, label: 'Focus' },
];

const buddies = [
    { id: 'b1', color: 'bg-blue-400', label: 'Orb' },
    { id: 'b2', color: 'bg-yellow-400', label: 'Sun' },
    { id: 'b3', color: 'bg-purple-400', label: 'Star' },
];

export default function AvatarSelection() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [selectedAvatar, setSelectedAvatar] = useState('av1');
    const [selectedBuddy, setSelectedBuddy] = useState('b1');

    const themeColors = {
        mild: { name: 'Calm Light', color: '#4A90E2' },
        moderate: { name: 'Warm Balance', color: '#F59E0B' },
        severe: { name: 'Safe Dark', color: '#38BDF8' }, // Dark theme primary
    };

    const currentTheme = themeColors[theme] || themeColors.mild;

    const handleFinish = () => {
        // Save selections
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 transition-colors duration-500">
            <div className="w-full max-w-2xl bg-surface p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2"> personalize Your Sanctuary</h1>
                    <p className="text-slate-500">Based on your answers, we've selected a theme for you.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Theme & Avatar */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-4">Your Theme</h3>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full shadow-lg"
                                    style={{ backgroundColor: currentTheme.color }}
                                />
                                <div>
                                    <p className="font-bold text-lg text-slate-900 dark:text-white">{currentTheme.name}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{theme}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-4">Choose Your Avatar</h3>
                            <div className="flex gap-4">
                                {avatars.map((av) => (
                                    <button
                                        key={av.id}
                                        onClick={() => setSelectedAvatar(av.id)}
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all ${selectedAvatar === av.id
                                                ? 'border-primary bg-primary/5 text-primary'
                                                : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:border-slate-300'
                                            }`}
                                    >
                                        {av.icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI Buddy */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-4">Your AI Companion</h3>
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center min-h-[200px]">
                            <div className="relative">
                                <motion.div
                                    key={selectedBuddy}
                                    className={`w-24 h-24 rounded-full blur-xl absolute inset-0 opacity-50 ${buddies.find(b => b.id === selectedBuddy).color}`}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                <div className={`w-24 h-24 rounded-full relative z-10 shadow-lg flex items-center justify-center ${buddies.find(b => b.id === selectedBuddy).color}`}>
                                    <Bot className="text-white w-10 h-10" />
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                {buddies.map((b) => (
                                    <button
                                        key={b.id}
                                        onClick={() => setSelectedBuddy(b.id)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${selectedBuddy === b.id
                                                ? 'border-slate-900 dark:border-white scale-110'
                                                : 'border-transparent opacity-50 hover:opacity-100'
                                            } ${b.color}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-10 flex justify-end">
                    <Button size="lg" onClick={handleFinish} className="w-full md:w-auto px-12 text-lg shadow-xl shadow-primary/20">
                        Enter Serenia
                    </Button>
                </div>

            </div>
        </div>
    );
}
