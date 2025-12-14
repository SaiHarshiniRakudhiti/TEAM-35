import React from 'react';
import { Button } from '../../components/ui/Button'; // Adjusted path
import { Users, AlertCircle, Calendar, ArrowUpRight } from 'lucide-react';

const stats = [
    { label: 'Active Patients', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Pending Alerts', value: '3', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100' },
    { label: 'Today\'s Sessions', value: '5', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-100' },
];

const patients = [
    { id: 1, name: 'Sarah Connor', status: 'Moderate', lastCheck: '2h ago', alert: false },
    { id: 2, name: 'John Doe', status: 'Severe', lastCheck: '10m ago', alert: true },
    { id: 3, name: 'Emily Chen', status: 'Mild', lastCheck: '1d ago', alert: false },
];

export default function DoctorDashboard() {
    return (
        <div className="space-y-6">

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 shadow-sm">
                        <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Patient List */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Activity</h3>
                        <Button variant="ghost" size="sm" className="text-indigo-600">View All</Button>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                        {patients.map((p) => (
                            <div key={p.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">
                                        {p.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white">{p.name}</p>
                                        <p className="text-xs text-slate-500">{p.lastCheck}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.status === 'Severe' ? 'bg-red-100 text-red-700' :
                                        p.status === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                        {p.status}
                                    </span>
                                    {p.alert && <AlertCircle size={18} className="text-red-500 animate-pulse" />}
                                    <Button variant="ghost" size="sm"><ArrowUpRight size={16} /></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schedule / Quick Actions */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                                <Users size={18} /> Add New Patient
                            </Button>
                            <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                                <Calendar size={18} /> Schedule Session
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
