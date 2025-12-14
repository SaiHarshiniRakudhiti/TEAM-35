import React, { useState } from 'react';
import { Phone, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-20 right-0 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-red-100 dark:border-red-900 overflow-hidden"
                    >
                        <div className="bg-red-500 text-white p-4 flex justify-between items-center">
                            <span className="font-bold flex items-center gap-2"><ShieldAlert size={18} /> Emergency Help</span>
                            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
                        </div>
                        <div className="p-4 space-y-3">
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Are you feeling unsafe? Tap below to call immediately.
                            </p>
                            <a
                                href="tel:911"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
                            >
                                <Phone size={18} />
                                Call 911
                            </a>
                            <button className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                                Crisis Helpline (Text)
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-200 text-slate-600 rotate-45' : 'bg-red-500 text-white hover:scale-110 animate-pulse'
                    }`}
            >
                {isOpen ? <PlusIcon rotated /> : <span className="font-bold text-lg">SOS</span>}
            </button>
        </div>
    );
}

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
