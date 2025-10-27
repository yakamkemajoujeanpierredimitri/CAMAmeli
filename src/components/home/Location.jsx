
import React from 'react';

const Location = () => {
    return (
        <section className="flex justify-center py-12 sm:py-20 bg-gray-50">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 max-w-6xl w-full">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-1 sm:gap-2 mb-3 sm:mb-5">📍 Our location</h3>

                <div className="bg-gray-100 rounded-xl h-52 sm:h-72 flex justify-center items-center">
                    <div className="text-center text-gray-500">
                        <div className="text-3xl sm:text-4xl mb-1 sm:mb-2.5">📍</div>
                        <h4 className="text-base sm:text-lg text-gray-700 mb-1">molyko</h4>
                        <p className="text-sm text-gray-500">Buea, South-West   Cameroon</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
