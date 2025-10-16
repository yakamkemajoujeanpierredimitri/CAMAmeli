
import React from 'react';

const StatsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white relative mb-12">Notre Impact<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-white rounded-full"></div></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-5xl font-bold block mb-2">500+</span>
                        <span className="text-xl font-semibold mb-1 text-white">Étudiants formés</span>
                        <span className="text-sm opacity-80 text-white">Avec succès</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-5xl font-bold block mb-2">15+</span>
                        <span className="text-xl font-semibold mb-1 text-white">Formations</span>
                        <span className="text-sm opacity-80 text-white">Programmes disponibles</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-5xl font-bold block mb-2">5</span>
                        <span className="text-xl font-semibold mb-1 text-white">Ans</span>
                        <span className="text-sm opacity-80 text-white">D'expérience</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-5xl font-bold block mb-2">95%</span>
                        <span className="text-xl font-semibold mb-1 text-white">Taux de réussite</span>
                        <span className="text-sm opacity-80 text-white">De nos étudiants</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
