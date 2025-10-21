import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faExclamationCircle, faClock, faMapMarkerAlt, faUsers, faCalendar, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faDeskpro } from "@fortawesome/free-brands-svg-icons";
const Card = ({title, category , description , image , date , location , apply , categoryEvent})=>{
   
    const days = Date(date).toLocaleDateString('fr-FR', { weekday: 'long' });
    const time = Date(date).toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit' });
   const duration =   Date.now() - Date(date) > 0 ? "Terminé" : "En cours";
    const registered = 45;
    return (
           <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                                <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                                    <div className="flex items-center gap-2 font-semibold text-blue-500">
                                        <FontAwesomeIcon icon={categoryEvent === "software" ? faDeskpro :  categoryEvent === "concours" ? faGraduationCap : faMoneyBill} />
                                        <span>{categoryEvent}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full bg-yellow-100 text-yellow-800">
                                        <FontAwesomeIcon icon={faExclamationCircle} />
                                        <span>Places limitées</span>
                                    </div>
                                </div>
                                <div className="p-8 text-left">
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-5">
                                        {description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                                        <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>{duration}</span></div>
                                        <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>{location}</span></div>
                                        <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>{`${registered}/${total} inscrits`}</span></div>
                                        <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>{`${days} ${time}`}</span></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                                    <div className="text-left">
                                        <span className="block text-xl font-bold text-blue-500 mb-1">200 000 FCFA</span>
                                        <span className="text-xs text-gray-600">Intensif</span>
                                    </div>
                                    <a href="#" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700">S'inscrire maintenant</a>
                                </div>
                            </div>)
                
    
}
export default Card;