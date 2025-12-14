import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, MessageCircle, BarChart2, Heart, Calendar, Phone, Menu, LogOut, Settings } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { SOSButton } from '../ui/SOSButton';

// Nav Items Configuration based on severity
const getNavItems = (severity) => {
    const base = [
        { label: 'Home', path: '/dashboard', icon: Home },
        { label: 'My Buddy', path: '/chat', icon: MessageCircle },
        { label: 'Progress', path: '/progress', icon: BarChart2 },
    ];

    if (severity === 'mild') {
        base.push({ label: 'Practices', path: '/practices', icon: Heart });
    }

    if (severity === 'moderate') {
        base.push(
            { label: 'Practices', path: '/practices', icon: Heart },
            { label: 'Calendar', path: '/calendar', icon: Calendar }
        );
    }

    if (severity === 'severe') {
        // Severe might focus more on Doctor connection and less on self-led practices?
        // "Doctor-led UI", "Care Circle"
        base.push({ label: 'Care Team', path: '/care-team', icon: Phone });
    }

    // Doctor access for Moderate too? "Doctor Assistance"
    if (severity === 'moderate') {
        // base.push({ label: 'Doctor', path: '/care-team', icon: Phone });
    }

    return base;
};

export default function Layout() {
    const { theme } = useTheme(); // theme is effectively severity: mild, moderate, severe
    const navItems = getNavItems(theme);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-500">

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-slate-200 dark:border-slate-800 p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-2 mb-10">
                    <div className={`w-8 h-8 rounded-lg bg-primary`} />
                    <h1 className="text-xl font-bold tracking-tight">Serenia</h1>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => clsx(
                                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium',
                                isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400'
                            )}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-medium">
                        <Settings size={20} />
                        Settings
                    </NavLink>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-surface border-b border-slate-100 dark:border-slate-800 sticky top-0 z-40">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-primary`} />
                    <h1 className="text-lg font-bold">Serenia</h1>
                </div>
                <Button variant="ghost" size="icon"><Menu size={24} /></Button>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-24 md:pb-0 relative">
                <Outlet />
                <SOSButton />
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 inset-x-0 bg-surface border-t border-slate-100 dark:border-slate-800 pb-safe z-40">
                <div className="flex justify-around p-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    'flex flex-col items-center gap-1 p-2 rounded-xl transition-all w-16',
                                    isActive ? 'text-primary' : 'text-slate-400'
                                )}
                            >
                                <div className={clsx(
                                    "p-1.5 rounded-full transition-all",
                                    isActive ? "bg-primary/10" : "bg-transparent"
                                )}>
                                    <item.icon size={20} className={isActive ? "fill-current" : ""} />
                                </div>
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>

        </div>
    );
}
