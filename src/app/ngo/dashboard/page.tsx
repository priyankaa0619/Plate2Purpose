"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';

const NGODashboard = () => {
    const [donations, setDonations] = useState([
        { id: 1, donor: "Radisson Blu", foodType: "Rice & Curry", qty: "12 kg", freshness: "High", time: "15:00", distance: "2.5 km" },
        { id: 2, donor: "Taj Coromandel", foodType: "Continental Mix", qty: "8 kg", freshness: "Medium", time: "12:00", distance: "4.1 km" },
        { id: 3, donor: "ITC Grand Chola", foodType: "South Indian Buffet", qty: "25 kg", freshness: "High", time: "18:30", distance: "1.2 km" }
    ]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Header />
            <div className="container mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold">NGO Dashboard</h1>
                        <p className="text-slate-500">Live feed of available donations nearby.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm">Online</span>
                        <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full font-bold text-sm">Chennai</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {donations.map(d => (
                        <div key={d.id} className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                            <div className="relative h-48 bg-slate-100 flex items-center justify-center">
                                <span className="text-4xl text-slate-300 italic font-black uppercase tracking-widest opacity-20">FOOOOOD</span>
                                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {d.distance}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-xl">{d.donor}</h3>
                                        <p className="text-slate-500 text-sm">{d.foodType}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-bold text-emerald-600">{d.qty}</span>
                                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Quantity</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl">
                                        <span className="block text-[10px] uppercase font-black text-slate-400 mb-1 tracking-widest">Freshness</span>
                                        <span className={`font-bold ${d.freshness === 'High' ? 'text-emerald-500' : 'text-amber-500'}`}>{d.freshness}</span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl">
                                        <span className="block text-[10px] uppercase font-black text-slate-400 mb-1 tracking-widest">Available</span>
                                        <span className="font-bold">{d.time}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 dark:shadow-none">
                                        Accept
                                    </button>
                                    <button className="px-5 py-3 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                        Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NGODashboard;
