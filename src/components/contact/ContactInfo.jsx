
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
    return (
        <aside className="bg-white p-10 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl mb-8 text-gray-800 relative">Nos coordonnées<div className="absolute bottom-[-10px] left-0 w-[50px] h-[3px] bg-blue-500"></div></h3>
            
            <div className="flex gap-4 mb-8 items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-white" />
                </div>
                <div className="info-content">
                    <h4 className="text-lg mb-2 text-gray-800">Adresse</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Cocody Angré, Rue des Jardins<br />
                        Face au Centre Commercial<br />
                        Abidjan, Côte d'Ivoire
                    </p>
                </div>
            </div>

            <div className="flex gap-4 mb-8 items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
                </div>
                <div className="info-content">
                    <h4 className="text-lg mb-2 text-gray-800">Téléphone</h4>
                    <p className="text-gray-600 leading-relaxed">
                        +225 07 XX XX XX XX<br />
                        +225 05 XX XX XX XX
                    </p>
                </div>
            </div>

            <div className="flex gap-4 mb-8 items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white" />
                </div>
                <div className="info-content">
                    <h4 className="text-lg mb-2 text-gray-800">Email</h4>
                    <p className="text-gray-600 leading-relaxed">
                        info@cama-formation.ci<br />
                        contact@cama-formation.ci
                    </p>
                </div>
            </div>

            <div className="flex gap-4 mb-8 items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} className="text-xl text-white" />
                </div>
                <div className="info-content">
                    <h4 className="text-lg mb-2 text-gray-800">Horaires</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Lun - Ven: 8h - 18h<br />
                        Samedi: 8h - 14h<br />
                        Dimanche: Fermé
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default ContactInfo;
