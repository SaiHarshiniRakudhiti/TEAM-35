import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function CrisisMode({ onExit }) {
    return (
        <div className="fixed inset-0 z-[60] bg-red-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full"
            >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone size={40} className="text-red-600" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">We are here for you.</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    You are not alone. Please reach out to a professional who can help right now.
                </p>

                <div className="space-y-4">
                    <a
                        href="tel:911"
                        className="block w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-200 transition-all text-xl"
                    >
                        Call Emergency Services
                    </a>
                    <a
                        href="tel:988"
                        className="block w-full py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-red-200 text-slate-900 dark:text-white font-bold rounded-2xl transition-all"
                    >
                        Call Suicide & Crisis Lifeline (988)
                    </a>
                </div>

                <Button variant="ghost" onClick={onExit} className="mt-12 text-slate-400 hover:text-slate-600">
                    <ArrowLeft size={18} className="mr-2" />
                    Exit Crisis Mode
                </Button>
            </motion.div>
        </div>
    );
}
