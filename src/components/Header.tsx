"use client";
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-200 dark:shadow-none">
                        P
                    </div>
                    <span className="text-xl font-bold tracking-tighter">Plate<span className="text-emerald-500">2</span>Purpose</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-medium hover:text-emerald-500 transition-colors">How It Works</Link>
                    <Link href="/impact" className="text-sm font-medium hover:text-emerald-500 transition-colors">Impact</Link>
                    <Link href="/volunteers" className="text-sm font-medium hover:text-emerald-500 transition-colors">Become a Hero</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="px-6 py-2 text-sm font-bold hover:text-emerald-500 transition-colors">Login</Link>
                    <Link href="/register" className="px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full hover:bg-emerald-600 transition-all shadow-md">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
