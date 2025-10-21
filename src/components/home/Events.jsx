
import React from 'react';
import { NavLink } from 'react-router-dom';
const Events = () => {
    return (
        <section className="py-16 px-[8%]">
            <div className="flex flex-wrap gap-10 max-w-7xl items-center w-full">
                <div className="flex-1 min-w-[300px] flex justify-center">
                    <img src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NzA4OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Conférence en salle" className="w-full max-w-lg rounded-2xl object-cover shadow-lg" />
                </div>

                <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="bg-gray-100 rounded-full p-3 text-2xl">🎤</div>
                        <h2 className="text-3xl font-bold">Conférences & Événements</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Participez à nos événements pour rester à la pointe des dernières tendances et innovations.
                    </p>

                    <div className="flex flex-col gap-4 mb-9">
                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Conférences Tech</h3>
                                <p className="text-gray-600 text-sm">Durée: 2h</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-gray-200 text-gray-800">Tout public</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Workshops Pratiques</h3>
                                <p className="text-gray-600 text-sm">Durée: 1 jour</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-yellow-100 text-yellow-800">Intermédiaire</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Podcasts Éducatifs</h3>
                                <p className="text-gray-600 text-sm">Durée: 45min</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-green-100 text-green-800">Débutant</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Séminaires Pros</h3>
                                <p className="text-gray-600 text-sm">Durée: 3 jours</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-cyan-100 text-cyan-800">Professionnel</span>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <NavLink to="/programmes" className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-black text-white hover:bg-gray-800">Voir les programmes</NavLink>
                        <NavLink to="/contact" className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-gray-100 text-black hover:bg-gray-200">Demander des infos</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
