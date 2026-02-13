"use client";
import React, { useState } from 'react';

const NGOSearch = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState([
        { id: 1, name: "Happy Hearts Foundation", distance: "2.4 km", rating: 4.8, meals: 1200, address: "T. Nagar, Chennai", phone: "9876543210" },
        { id: 2, name: "Food for All Trust", distance: "3.1 km", rating: 4.5, meals: 850, address: "Adyar, Chennai", phone: "9876543211" },
        { id: 3, name: "Green Plate NGO", distance: "4.5 km", rating: 4.9, meals: 2300, address: "Velachery, Chennai", phone: "9876543212" },
        { id: 4, name: "Community Kitchen", distance: "5.2 km", rating: 4.2, meals: 540, address: "Mylapore, Chennai", phone: "9876543213" },
        { id: 5, name: "Zero Hunger Initiative", distance: "6.8 km", rating: 4.7, meals: 1750, address: "Anna Nagar, Chennai", phone: "9876543214" }
    ]);

    return (
        <div className="py-16 container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Find NGOs Nearby</h2>
                <div className="flex max-w-md mx-auto items-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-emerald-100 dark:border-slate-700 p-1">
                    <input
                        type="text"
                        placeholder="Search your city (e.g. Chennai)..."
                        className="flex-1 px-6 py-2 outline-none bg-transparent"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition-all">
                        Search
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map(ngo => (
                    <div key={ngo.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-xl group-hover:text-emerald-500 transition-colors uppercase tracking-tight">{ngo.name}</h3>
                            <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded text-xs font-bold">
                                {ngo.rating} ★
                            </span>
                        </div>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                            <p className="flex items-center"><span className="mr-2">📍</span> {ngo.address} ({ngo.distance})</p>
                            <p className="flex items-center"><span className="mr-2">🍲</span> {ngo.meals} meals saved this month</p>
                            <p className="flex items-center"><span className="mr-2">📞</span> {ngo.phone}</p>
                        </div>
                        <button className="w-full py-3 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-all">
                            Request Pickup
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NGOSearch;
