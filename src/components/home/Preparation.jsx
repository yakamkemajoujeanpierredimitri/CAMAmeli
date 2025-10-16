
import React from 'react';

const Preparation = () => {
    return (
        <section className="py-16 px-[8%]">
            <div className="flex flex-wrap gap-10 max-w-7xl items-center w-full">
                <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="bg-gray-100 rounded-full p-3 text-2xl">📘</div>
                        <h2 className="text-3xl font-bold">Préparation aux Concours</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Préparez-vous efficacement aux concours d'entrée et examens avec nos méthodes éprouvées.
                    </p>

                    <div className="flex flex-col gap-4 mb-9">
                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Concours Grandes Écoles</h3>
                                <p className="text-gray-600 text-sm">Durée: 12 mois</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-orange-500 text-white">Intensif</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Examens d'État</h3>
                                <p className="text-gray-600 text-sm">Durée: 6 mois</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-blue-500 text-white">Standard</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Concours Internationaux</h3>
                                <p className="text-gray-600 text-sm">Durée: 8 mois</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-green-500 text-white">Expert</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Tests d'Aptitude</h3>
                                <p className="text-gray-600 text-sm">Durée: 3 mois</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-purple-500 text-white">Préparatoire</span>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <button className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-black text-white hover:bg-gray-800">Voir les programmes</button>
                        <button className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-gray-100 text-black hover:bg-gray-200">Demander des infos</button>
                    </div>
                </div>

                <div className="flex-1 min-w-[300px] flex justify-center">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cours en salle" className="w-full max-w-lg rounded-2xl object-cover shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Preparation;
