
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faGraduationCap, faCube, faChartLine, faCheckCircle, faExclamationCircle, faTimesCircle, faClock, faMapMarkerAlt, faUsers, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sessions = () => {
    return (
        <section className="py-24 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-16">
                    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        <span>Programmes & Sessions</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Nos prochaines sessions de formation</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Consultez notre calendrier et inscrivez-vous dès maintenant aux programmes qui vous intéressent.
                    </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Session Card 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2 font-semibold text-blue-500">
                                <FontAwesomeIcon icon={faDesktop} />
                                <span>Logiciel</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full bg-green-100 text-green-800">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Inscriptions ouvertes</span>
                            </div>
                        </div>
                        <div className="p-8 text-left">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Formation AutoCAD Complète</h3>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                Maîtrisez AutoCAD de A à Z : dessin 2D, modélisation 3D, mise en page et impression professionnelle.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>6 semaines</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Salle Informatique A</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>12/20 inscrits</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>Lun-Mer-Ven 14h–17h</span></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                            <div className="text-left">
                                <span className="block text-xl font-bold text-blue-500 mb-1">150 000 FCFA</span>
                                <span className="text-xs text-gray-600">Débutant à Avancé</span>
                            </div>
                            <NavLink to="/programmes" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700">S'inscrire maintenant</NavLink>
                        </div>
                    </div>
        
                    {/* Session Card 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2 font-semibold text-blue-500">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>Concours</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full bg-yellow-100 text-yellow-800">
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                <span>Places limitées</span>
                            </div>
                        </div>
                        <div className="p-8 text-left">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Préparation Concours INP-HB</h3>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                Préparation intensive pour les concours d'entrée à l'Institut National Polytechnique Houphouët-Boigny.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>3 mois</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Amphithéâtre B</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>18/30 inscrits</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>Sam-Dim 8h–12h</span></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                            <div className="text-left">
                                <span className="block text-xl font-bold text-blue-500 mb-1">200 000 FCFA</span>
                                <span className="text-xs text-gray-600">Intensif</span>
                            </div>
                            <a href="#" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700">S'inscrire maintenant</a>
                        </div>
                    </div>
        
                    {/* Session Card 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2 font-semibold text-blue-500">
                                <FontAwesomeIcon icon={faCube} />
                                <span>Logiciel</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full bg-green-100 text-green-800">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Inscriptions ouvertes</span>
                            </div>
                        </div>
                        <div className="p-8 text-left">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Formation Revit Architecture</h3>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                Devenez expert en modélisation BIM avec Revit pour la conception architecturale professionnelle.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>8 semaines</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Salle Informatique B</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>10/15 inscrits</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>Mar-Jeu 18h–21h</span></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                            <div className="text-left">
                                <span className="block text-xl font-bold text-blue-500 mb-1">180 000 FCFA</span>
                                <span className="text-xs text-gray-600">Intermédiaire à Avancé</span>
                            </div>
                            <a href="#" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700">S'inscrire maintenant</a>
                        </div>
                    </div>
        
                    {/* Session Card 4 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2 font-semibold text-blue-500">
                                <FontAwesomeIcon icon={faChartLine} />
                                <span>Business</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full bg-red-100 text-red-800">
                                <FontAwesomeIcon icon={faTimesCircle} />
                                <span>Complet</span>
                            </div>
                        </div>
                        <div className="p-8 text-left">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Marketing Digital Pro</h3>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                Stratégies de marketing digital, réseaux sociaux, SEO et outils d'analyse pour les professionnels.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>4 semaines</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Salle de Conférence</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>25/25 inscrits</span></div>
                                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>Lun-Ven 9h–12h</span></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                            <div className="text-left">
                                <span className="block text-xl font-bold text-blue-500 mb-1">120 000 FCFA</span>
                                <span className="text-xs text-gray-600">Tous niveaux</span>
                            </div>
                            <a href="#" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-gray-600 text-white opacity-60 cursor-not-allowed">Sessions suivantes</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sessions;
