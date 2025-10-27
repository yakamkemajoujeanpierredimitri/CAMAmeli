
import React from 'react';

const StatsSection = () => {
    return (
        <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white relative mb-8 sm:mb-12">Our Impact<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-white rounded-full"></div></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
                    <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-4xl sm:text-5xl font-bold block mb-1 sm:mb-2">500+</span>
                        <span className="text-lg sm:text-xl font-semibold mb-1 text-white">Students Trained</span>
                        <span className="text-sm opacity-80 text-white">Successfully</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-4xl sm:text-5xl font-bold block mb-1 sm:mb-2">15+</span>
                        <span className="text-lg sm:text-xl font-semibold mb-1 text-white">Training</span>
                        <span className="text-sm opacity-80 text-white">Available programs</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-4xl sm:text-5xl font-bold block mb-1 sm:mb-2">5</span>
                        <span className="text-lg sm:text-xl font-semibold mb-1 text-white">Years</span>
                        <span className="text-sm opacity-80 text-white">Of experience</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-white/20">
                        <span className="text-4xl sm:text-5xl font-bold block mb-1 sm:mb-2">95%</span>
                        <span className="text-lg sm:text-xl font-semibold mb-1 text-white">Success rate</span>
                        <span className="text-sm opacity-80 text-white">Of our students</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
