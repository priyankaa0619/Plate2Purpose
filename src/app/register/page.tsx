"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', role: 'hotel', phone: '', address: ''
    });
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            login({
                _id: '1',
                name: formData.name,
                email: formData.email,
                role: formData.role,
                token: 'fake-jwt'
            });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Header />
            <div className="container mx-auto px-6 py-20 flex justify-center">
                <div className="w-full max-w-xl bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <h2 className="text-3xl font-bold mb-2 text-center">Join the Mission</h2>
                    <p className="text-slate-500 text-center mb-8">Select your role and start your journey.</p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-4">Choose Your Role</label>
                            <div className="grid grid-cols-3 gap-4">
                                {['hotel', 'ngo', 'volunteer'].map(role => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, role })}
                                        className={`py-3 rounded-xl border-2 font-bold transition-all capitalize ${formData.role === role
                                                ? 'border-emerald-500 bg-emerald-50 text-emerald-600'
                                                : 'border-slate-100 hover:border-emerald-200'
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                placeholder="+91 ..."
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">Address</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                placeholder="Enter full address..."
                                rows={3}
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={loading}
                            className="md:col-span-2 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Already have an account? <Link href="/login" className="text-emerald-500 font-bold hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
