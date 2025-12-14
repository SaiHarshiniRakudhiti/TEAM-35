import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';

const questions = [
    {
        id: 1,
        text: "How often does fear or anxiety stop you from doing things you want to do?",
        options: [
            { label: "Rarely or never", score: 1 },
            { label: "Sometimes", score: 2 },
            { label: "Often", score: 3 },
            { label: "Almost always", score: 4 }
        ]
    },
    {
        id: 2,
        text: "How intense are your emotional reactions when facing your fear?",
        options: [
            { label: "Calm / Manageable", score: 1 },
            { label: "Uncomfortable but okay", score: 2 },
            { label: "Panicked / Distressed", score: 3 },
            { label: "Overwhelming terror", score: 4 }
        ]
    },
    {
        id: 3,
        text: "Do you experience physical symptoms (racing heart, sweating, shaking)?",
        options: [
            { label: "No significant symptoms", score: 1 },
            { label: "Mild tension", score: 2 },
            { label: "Noticeable physical reaction", score: 3 },
            { label: "Severe physical distress", score: 4 }
        ]
    },
    {
        id: 4,
        text: "How confident do you feel in managing your fear right now?",
        options: [
            { label: "Very confident", score: 1 },
            { label: "Somewhat confident", score: 2 },
            { label: "Not very confident", score: 3 },
            { label: "Not confident at all", score: 4 }
        ]
    }
];

export default function EntryQuiz() {
    const navigate = useNavigate();
    const { setTheme } = useTheme();
    const [currentQ, setCurrentQ] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const handleSkip = () => {
        setTheme('mild');
        navigate('/avatar-selection');
    };

    const handleAnswer = (score) => {
        const newScore = totalScore + score;
        if (currentQ < questions.length - 1) {
            setTotalScore(newScore);
            setCurrentQ(currentQ + 1);
        } else {
            // Logic for segmentation
            // Max score = 16, Min = 4
            // Mild: 4-7
            // Moderate: 8-12
            // Severe: 13-16
            let result = 'mild';
            if (newScore >= 8 && newScore <= 12) result = 'moderate';
            if (newScore >= 13) result = 'severe';

            setTheme(result);
            // Pass the result to next screen or just rely on context
            navigate('/avatar-selection', { state: { severity: result } });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-lg">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-slate-500 mb-2">
                        <span>Question {currentQ + 1} of {questions.length}</span>
                        <button onClick={handleSkip} className="text-primary hover:underline">Skip Quiz</button>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQ}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-surface p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {questions[currentQ].text}
                        </h2>

                        <div className="space-y-3">
                            {questions[currentQ].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(option.score)}
                                    className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all flex justify-between items-center group"
                                >
                                    <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary">
                                        {option.label}
                                    </span>
                                    <ChevronRight size={18} className="text-slate-300 group-hover:text-primary" />
                                </button>
                            ))}
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
