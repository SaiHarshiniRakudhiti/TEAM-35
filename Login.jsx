import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { User, Stethoscope, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TermsModal, EmergencyModal } from '../components/modals/PolicyModals';

export default function Login() {
    const { theme } = useTheme();
    const [userType, setUserType] = useState('member');
    const [isLogin, setIsLogin] = useState(true);
    const [showTerms, setShowTerms] = useState(false);
    const [showEmergency, setShowEmergency] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin) {
            // Sign Up Flow
            setShowTerms(true);
        } else {
            // Login Flow
            if (userType === 'doctor') {
                navigate('/doctor/dashboard');
            } else {
                navigate('/dashboard');
            }
        }
    };

    const handleTermsAccept = () => {
        setShowTerms(false);
        setShowEmergency(true);
    };

    const handleEmergencyAccept = () => {
        setShowEmergency(false);
        if (userType === 'member') {
            navigate('/setup');
        } else {
            navigate('/doctor/verification');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background transition-colors duration-500">
            <TermsModal
                isOpen={showTerms}
                onClose={() => setShowTerms(false)}
                onAccept={handleTermsAccept}
            />

            <EmergencyModal
                isOpen={showEmergency}
                onClose={() => setShowEmergency(false)}
                onAccept={handleEmergencyAccept}
            />

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-surface rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
            >
                {/* Header / Tabs */}
                <div className="flex p-2 bg-slate-50/50 dark:bg-slate-900/50">
                    <button
                        onClick={() => setUserType('member')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all ${userType === 'member'
                            ? 'bg-white dark:bg-slate-800 shadow-sm text-primary'
                            : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        <User size={18} />
                        Member
                    </button>
                    <button
                        onClick={() => setUserType('doctor')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all ${userType === 'doctor'
                            ? 'bg-white dark:bg-slate-800 shadow-sm text-primary'
                            : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        <Stethoscope size={18} />
                        Doctor
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <motion.h1
                            key={userType}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl font-bold text-slate-900 dark:text-white"
                        >
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </motion.h1>
                        <p className="text-sm text-slate-500">
                            {userType === 'member'
                                ? 'Your sanctuary for peace and progress.'
                                : 'Manage your patients with care and precision.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label={userType === 'member' ? "Email or Phone" : "Medical License ID / Email"}
                            placeholder={userType === 'member' ? "hello@example.com" : "License #"}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                        />

                        {!isLogin && (
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="terms" className="rounded text-primary focus:ring-primary" required />
                                <label htmlFor="terms" className="text-xs text-slate-500">
                                    I accept the <a href="#" className="text-primary hover:underline">Terms</a> & <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                                </label>
                            </div>
                        )}

                        <Button className="w-full gap-2 group">
                            {isLogin ? 'Sign In' : 'Get Started'}
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </form>

                    {/* Switch Mode */}
                    <div className="text-center text-sm">
                        <span className="text-slate-400">
                            {isLogin ? "New to Serenia?" : "Already have an account?"}
                        </span>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="ml-2 font-semibold text-primary hover:underline"
                        >
                            {isLogin ? "Sign Up" : "Log In"}
                        </button>
                    </div>

                    {/* Emergency Disclaimer Snippet */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                        <p className="text-[10px] text-slate-400">
                            If this is a medical emergency, please call 911 or your local emergency number immediately.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
