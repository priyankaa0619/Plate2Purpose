"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';

const AdminDashboard = () => {
    const [approvals, setApprovals] = useState([
        { id: 1, name: "Happy Hearts NGO", type: "NGO", status: "pending" },
        { id: 2, name: "Rahul Kumar", type: "Volunteer", status: "pending" },
        { id: 3, name: "City Shelter", type: "NGO", status: "pending" }
    ]);

    const handleApprove = (id: number) => {
        setApprovals(approvals.filter(a => a.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <Header />
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-black mb-12 italic uppercase tracking-tighter">Admin <span className="text-emerald-500">Command Center</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Donations</div>
                        <div className="text-4xl font-black">1.2k</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Active NGOs</div>
                        <div className="text-4xl font-black text-emerald-500">85</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Volunteers</div>
                        <div className="text-4xl font-black text-blue-500">120</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">CO2 Saved</div>
                        <div className="text-4xl font-black text-amber-500">2.4T</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-10 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="text-2xl font-black italic">Pending Approvals</h2>
                    </div>
                    <div className="p-6">
                        {approvals.length > 0 ? (
                            <div className="space-y-4">
                                {approvals.map(a => (
                                    <div key={a.id} className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-900">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1 block">{a.type}</span>
                                            <h3 className="font-bold text-xl">{a.name}</h3>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleApprove(a.id)}
                                                className="px-6 py-2 bg-emerald-500 text-white text-sm font-black rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100"
                                            >
                                                APPROVE
                                            </button>
                                            <button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-black rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
                                                VIEW ID
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center text-slate-400 italic font-bold">
                                No pending approvals at the moment.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
