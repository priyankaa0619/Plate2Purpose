"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            login({
                _id: '1',
                name: 'Test Hotel',
                email: formData.email,
                role: formData.email.includes('ngo') ? 'ngo' : (formData.email.includes('volunteer') ? 'volunteer' : 'hotel'),
                token: 'fake-jwt'
            });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Header />
            <div className="container mx-auto px-6 py-20 flex justify-center">
                <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back</h2>
                    <p className="text-slate-500 text-center mb-8">Login to continue rescuing food.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                placeholder="hotel@test.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={loading}
                            className="w-full py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 dark:shadow-none disabled:opacity-50"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <Link href="/register" className="text-emerald-500 font-bold hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
