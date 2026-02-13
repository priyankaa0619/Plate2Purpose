"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';

const VolunteerDashboard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, hotel: "Radisson Blu", ngo: "Happy Hearts", distance: "3.2 km", status: "assigned", time: "10 mins ago" }
    ]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Header />
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-3xl font-bold italic">Hero Dashboard</h1>
                        <p className="text-slate-500 italic">Ready to rescue some food today?</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex-1 text-center">
                            <span className="text-xs text-slate-400 font-bold block uppercase mb-1">Rank</span>
                            <span className="font-bold text-emerald-500 font-black">Zero Waste Warrior</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex-1 text-center">
                            <span className="text-xs text-slate-400 font-bold block uppercase mb-1">Tokens</span>
                            <span className="font-bold text-amber-500 font-black">450 ⭐</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="font-bold text-xl mb-6">Active Rescues</h2>
                    {tasks.length > 0 ? (
                        <div className="space-y-6">
                            {tasks.map(task => (
                                <div key={task.id} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-emerald-100 transition-all"></div>

                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="text-[10px] font-black tracking-widest text-emerald-500 uppercase mb-2">Pickup From</div>
                                            <div className="text-2xl font-bold mb-1">{task.hotel}</div>
                                            <div className="text-sm text-slate-400 italic">Distance: {task.distance}</div>
                                        </div>

                                        <div className="hidden md:flex h-12 w-12 items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-full text-2xl">
                                            🏍️
                                        </div>

                                        <div className="flex-1 text-center md:text-right">
                                            <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">Deliver To</div>
                                            <div className="text-2xl font-bold mb-1">{task.ngo}</div>
                                            <div className="text-sm text-slate-400 italic font-black">{task.time}</div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-700 flex flex-col md:flex-row gap-4">
                                        <button className="flex-1 py-4 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">
                                            START PICKUP
                                        </button>
                                        <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all">
                                            VIEW ROUTE
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                            <div className="text-6xl mb-4">💤</div>
                            <p className="text-slate-500 font-bold capitalize italic">No active rescues. You're all caught up!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerDashboard;
