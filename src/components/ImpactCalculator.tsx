"use client";
import React, { useState } from 'react';

const ImpactCalculator = () => {
    const [weight, setWeight] = useState(10);

    const co2Saved = (weight * 2).toFixed(1);
    const peopleFed = (weight * 2.5).toFixed(1);
    const mealsCreated = (weight / 1.25).toFixed(1);

    return (
        <div className="p-8 rounded-2xl shadow-xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6 text-center">Eco-Impact Calculator</h3>

            <div className="mb-8">
                <label className="block text-sm font-medium mb-4 text-slate-600 dark:text-slate-300">
                    Food Weight: <span className="text-2xl font-bold text-emerald-500">{weight} kg</span>
                </label>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full h-3 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs mt-2 text-slate-400">
                    <span>1 kg</span>
                    <span>100 kg</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="text-3xl mb-2">🍽️</div>
                    <div className="text-2xl font-bold text-emerald-600">{peopleFed}</div>
                    <div className="text-sm text-slate-500">People Fed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-3xl mb-2">🌱</div>
                    <div className="text-2xl font-bold text-blue-600">{co2Saved} kg</div>
                    <div className="text-sm text-slate-500">CO₂ Saved</div>
                </div>
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                    <div className="text-3xl mb-2">🍱</div>
                    <div className="text-2xl font-bold text-amber-600">{mealsCreated}</div>
                    <div className="text-sm text-slate-500">Meals Created</div>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-2">Did You Know?</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li className="flex items-start"><span className="mr-2">🌍</span> 1 kg food waste = 2 kg CO₂ emissions</li>
                    <li className="flex items-start"><span className="mr-2">🏭</span> Food waste accounts for 8% of global emissions</li>
                    <li className="flex items-start"><span className="mr-2">🥯</span> 1/3 of all food produced is wasted annually</li>
                </ul>
            </div>
        </div>
    );
};

export default ImpactCalculator;
