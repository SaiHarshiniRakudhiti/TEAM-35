import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Plus, X, ClipboardList } from 'lucide-react';

export default function PatientDetail() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Morning Meditation (10m)', completed: false },
        { id: 2, text: 'Log Fear Intensity', completed: true },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Sarah Connor</h1>
                    <div className="flex gap-2 mt-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-bold uppercase">Moderate</span>
                        <span className="text-slate-500 text-sm">Patient ID: #8821</span>
                    </div>
                </div>
                <Button>Start Live Session</Button>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Monitor Review */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-lg mb-4">Weekly Monitoring</h3>
                    <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-400">
                        [Graph Placeholder: Mood vs Stress]
                    </div>
                </div>

                {/* Recovery Plan Builder */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                        <ClipboardList className="text-indigo-600" />
                        <h3 className="font-bold text-lg">Recovery Plan</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Add specific task..."
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                className="flex-1"
                            />
                            <Button size="icon" onClick={addTask}><Plus size={20} /></Button>
                        </div>

                        <div className="space-y-2">
                            {tasks.map(task => (
                                <div key={task.id} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                    <span className={task.completed ? 'line-through text-slate-400' : ''}>{task.text}</span>
                                    <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} className="text-slate-400 hover:text-red-500">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
