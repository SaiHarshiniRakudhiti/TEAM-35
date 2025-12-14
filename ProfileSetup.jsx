import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ProfileSetup() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        aiName: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        // Basic validation
        if (step === 1 && (!formData.name || !formData.age)) return;
        if (step === 2 && !formData.aiName) return;

        if (step < 2) {
            setStep(step + 1);
        } else {
            // Finish
            navigate('/quiz'); // Go to Entry Quiz
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <motion.div
                key={step} // re-animate on step change
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-md bg-surface p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
            >
                <div className="mb-8">
                    <div className="flex gap-2 mb-4">
                        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`} />
                        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {step === 1 ? "Let's get to know you" : "Meet your companion"}
                    </h1>
                    <p className="text-slate-500 mt-2">
                        {step === 1 ? "Help us personalize your experience." : "Give your AI safety buddy a name."}
                    </p>
                </div>

                <div className="space-y-6">
                    {step === 1 && (
                        <>
                            <Input
                                name="name"
                                label="What should we call you?"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <Input
                                name="age"
                                label="Age"
                                type="number"
                                placeholder="e.g. 25"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="flex justify-center py-6">
                                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                                    <Sparkles size={40} className="text-primary" />
                                </div>
                            </div>
                            <Input
                                name="aiName"
                                label="Name your AI Buddy"
                                placeholder="e.g. Hope, Lumi, Sky"
                                value={formData.aiName}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <Button onClick={handleNext} className="w-full group">
                        {step === 2 ? "Complete Setup" : "Continue"}
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

            </motion.div>
        </div>
    );
}
