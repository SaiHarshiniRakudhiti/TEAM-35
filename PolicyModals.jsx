import React from 'react';
import { Button } from '../ui/Button';
import { Modal } from './Modal';
import { AlertTriangle, FileText } from 'lucide-react';

export function TermsModal({ isOpen, onClose, onAccept }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Terms & Privacy Policy">
            <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl h-64 overflow-y-auto text-sm text-slate-600 dark:text-slate-300">
                    <p className="font-bold mb-2">1. Introduction</p>
                    <p className="mb-4">Welcome to Serenia. By using this app, you agree to our Terms of Service and Privacy Policy.</p>
                    <p className="font-bold mb-2">2. Data Privacy</p>
                    <p className="mb-4">We prioritize your privacy. All your personal data and sessions are encrypted.</p>
                    <p className="font-bold mb-2">3. Medical Disclaimer</p>
                    <p>This app is for wellness support and is NOT a substitute for professional medical advice, diagnosis, or treatment.</p>
                    {/* Add more filler text as needed */}
                </div>
                <div className="flex justify-end gap-2 pt-2">
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button onClick={onAccept}>I Accept</Button>
                </div>
            </div>
        </Modal>
    );
}

export function EmergencyModal({ isOpen, onClose, onAccept }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Important Disclaimer">
            <div className="space-y-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <AlertTriangle size={32} className="text-red-500" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Are you in immediate danger?</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                        Serenia is an automated support tool. We cannot provide emergency assistance.
                    </p>
                    <p className="text-sm bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 p-3 rounded-lg border border-red-100 dark:border-red-900/20">
                        If you or someone else is in danger, please call emergency services (911) or go to the nearest emergency room immediately.
                    </p>
                </div>

                <div className="w-full flex justify-end gap-2 pt-4">
                    {/* No cancel button usually for mandatory disclaimer, but here we might allow back */}
                    <Button variant="outline" onClick={onClose} className="w-full">Back</Button>
                    <Button onClick={onAccept} className="w-full bg-red-500 hover:bg-red-600 text-white shadow-red-200">
                        I Understand & Continue
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
