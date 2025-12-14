import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Calendar, Settings, Bell, LogOut } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { SOSButton } from '../ui/SOSButton';

const navItems = [
    { label: 'Dashboard', path: '/doctor/dashboard', icon: LayoutDashboard },
    { label: 'My Patients', path: '/doctor/patients', icon: Users },
    { label: 'Schedule', path: '/doctor/schedule', icon: Calendar },
    { label: 'Reports', path: '/doctor/reports', icon: FileText },
];

export default function DoctorLayout() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col md:flex-row">

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600" />
                    <h1 className="text-xl font-bold tracking-tight">Serenia <span className="text-indigo-600 ml-1 text-sm bg-indigo-50 px-2 py-1 rounded-full">MD</span></h1>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => clsx(
                                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium',
                                isActive
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
                                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                            )}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <NavLink to="/doctor/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium">
                        <Settings size={20} />
                        Settings
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all font-medium">
                        <LogOut size={20} />
                        Logout
                    </NavLink>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Top Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 flex items-center justify-between sticky top-0 z-10">
                    <h2 className="font-semibold">Overview</h2>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                        </Button>
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Dr+Smith" alt="Dr Profile" />
                        </div>
                    </div>
                </header>

                <div className="p-6 md:p-8 relative">
                    <Outlet />
                    <SOSButton />
                </div>
            </main>

        </div>
    );
}
