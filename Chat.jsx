import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Settings2 } from 'lucide-react';

const buddies = {
    mild: { name: 'Hope', color: 'bg-blue-400' },
    moderate: { name: 'Lumi', color: 'bg-yellow-400' },
    severe: { name: 'Sky', color: 'bg-indigo-400' },
};

export default function Chat() {
    const { theme } = useTheme();
    const buddy = buddies[theme] || buddies.mild;

    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: `Hello! I'm ${buddy.name}. How are you feeling right now?` }
    ]);
    const [inputText, setInputText] = useState('');
    const [pace, setPace] = useState('Common'); // Slow, Normal, Fast

    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMsg = { id: Date.now(), sender: 'user', text: inputText };
        setMessages(prev => [...prev, newMsg]);
        setInputText('');
        setIsLoading(true);

        try {
            // Call the backend proxy
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: newMsg.text })
            });

            const data = await response.json();

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'ai',
                text: data.reply
            }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'ai',
                text: "I'm having trouble connecting to my cloud. Please ensure the backend server is running."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-[calc(100vh-80px)] md:h-screen flex flex-col bg-background relative overflow-hidden">

            {/* Header / Controls */}
            <div className="p-4 bg-surface/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${buddy.color} shadow-lg`} />
                    <div>
                        <h2 className="font-bold text-slate-900 dark:text-white">{buddy.name}</h2>
                        <p className="text-xs text-slate-500">Always here for you</p>
                    </div>
                </div>

                {theme === 'moderate' && (
                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                        {['Slow', 'Normal', 'Fast'].map(p => (
                            <button
                                key={p}
                                onClick={() => setPace(p)}
                                className={`px-3 py-1 text-xs rounded-md transition-all ${pace === p
                                    ? 'bg-white dark:bg-slate-700 shadow-sm font-semibold text-primary'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${msg.sender === 'user'
                            ? 'bg-primary text-white rounded-tr-sm'
                            : 'bg-surface border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm'
                            }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {/* Loading Indicator */}
                {isLoading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="bg-surface border border-slate-100 dark:border-slate-800 p-4 rounded-2xl rounded-tl-sm text-slate-500 text-sm flex gap-1 items-center">
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface border-t border-slate-100 dark:border-slate-800">
                <form onSubmit={handleSend} className="flex gap-2">
                    <Button type="button" variant="secondary" size="icon" className="rounded-full shrink-0">
                        <Mic size={20} />
                    </Button>
                    <div className="flex-1 relative">
                        <input
                            className="w-full h-10 pl-4 pr-10 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                            placeholder="Type a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </div>
                    <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={!inputText.trim()}>
                        <Send size={18} />
                    </Button>
                </form>
            </div>

        </div>
    );
}
