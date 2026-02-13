"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                            Turn Your Surplus INTO Someone’s <span className="text-emerald-500 italic block">Purpose.</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                            Plate to Purpose connects hotels with excess food to NGOs and volunteers, reducing waste and feeding our communities in real-time.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/register?role=hotel" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-lg shadow-emerald-200 dark:shadow-none">
                                Donate Food
                            </Link>
                            <Link href="/find-ngos" className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-emerald-100 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-bold rounded-full hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all">
                                Find NGOs
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50"></div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
                                alt="Food Rescue"
                                className="rounded-3xl shadow-2xl relative z-10 border-8 border-white dark:border-slate-800"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">5,200+</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider">Kg Food Saved</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">12,400+</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider">Meals Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">10.4 Tons</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider">CO₂ Prevented</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">150+</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider">Active NGOs</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
