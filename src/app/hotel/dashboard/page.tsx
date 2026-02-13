"use client";
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';

const HotelDashboard = () => {
    const { user } = useAuth();
    const [showDonateForm, setShowDonateForm] = useState(false);
    const [donations, setDonations] = useState([
        { id: 1, foodType: "Veg Biryani", quantity: 15, status: "delivered", createdAt: "2026-02-12" },
        { id: 2, foodType: "Mixed Curry & Roti", quantity: 8, status: "accepted", createdAt: "2026-02-13" }
    ]);

    const [formData, setFormData] = useState({
        eventType: 'Restaurant', foodType: '', quantity: '', timeSinceCooked: '', pickupAddress: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newDonation = {
            id: donations.length + 1,
            foodType: formData.foodType,
            quantity: parseInt(formData.quantity),
            status: 'pending',
            createdAt: new Date().toISOString().split('T')[0]
        };
        setDonations([newDonation, ...donations]);
        setShowDonateForm(false);
        setFormData({ eventType: 'Restaurant', foodType: '', quantity: '', timeSinceCooked: '', pickupAddress: '' });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Header />
            <div className="container mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold">Hotel Dashboard</h1>
                        <p className="text-slate-500">Welcome back, {user?.name || 'Partner'}</p>
                    </div>
                    <button
                        onClick={() => setShowDonateForm(true)}
                        className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 dark:shadow-none"
                    >
                        + Create Donation
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 uppercase font-bold mb-2">Total Donated</div>
                        <div className="text-3xl font-bold text-emerald-500">23 kg</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 uppercase font-bold mb-2">Meals Created</div>
                        <div className="text-3xl font-bold text-blue-500">18</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 uppercase font-bold mb-2">Live Status</div>
                        <div className="text-3xl font-bold text-amber-500">1 Active</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="font-bold text-xl">Recent Donations</h2>
                        <button className="text-emerald-500 text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-sm">
                                <tr>
                                    <th className="px-8 py-4">Food Item</th>
                                    <th className="px-8 py-4">Quantity</th>
                                    <th className="px-8 py-4">Status</th>
                                    <th className="px-8 py-4">Date</th>
                                    <th className="px-8 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {donations.map(d => (
                                    <tr key={d.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="px-8 py-6 font-medium">{d.foodType}</td>
                                        <td className="px-8 py-6">{d.quantity} kg</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${d.status === 'delivered' ? 'bg-emerald-50 text-emerald-600' :
                                                    d.status === 'accepted' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                                                }`}>
                                                {d.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-slate-500">{d.createdAt}</td>
                                        <td className="px-8 py-6">
                                            <button className="text-slate-400 hover:text-emerald-500">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showDonateForm && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
                    <div className="bg-white dark:bg-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto relative">
                        <button
                            onClick={() => setShowDonateForm(false)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-6">Create New Donation</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Event Type</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent"
                                    value={formData.eventType}
                                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                >
                                    <option>Restaurant</option>
                                    <option>Wedding</option>
                                    <option>Birthday</option>
                                    <option>Corporate</option>
                                    <option>Festival</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Food Type</label>
                                <input
                                    type="text" required placeholder="e.g. Biryani"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent"
                                    value={formData.foodType}
                                    onChange={(e) => setFormData({ ...formData, foodType: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Quantity (kg)</label>
                                <input
                                    type="number" required placeholder="10"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Hours Since Cooked</label>
                                <input
                                    type="number" required placeholder="2"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent"
                                    value={formData.timeSinceCooked}
                                    onChange={(e) => setFormData({ ...formData, timeSinceCooked: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Pickup Address</label>
                                <textarea
                                    required placeholder="Enter address..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent"
                                    rows={2}
                                    value={formData.pickupAddress}
                                    onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Freshness Indicator</label>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-full"></div>
                                </div>
                                <p className="text-xs text-emerald-600 mt-2 font-bold">✓ High Freshness - OK to donate</p>
                            </div>
                            <button className="md:col-span-2 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all">
                                Submit Donation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelDashboard;
