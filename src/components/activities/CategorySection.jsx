
import React from 'react';
import { NavLink } from 'react-router-dom';

const CategorySection = ({Accurment , reverse = false}) => {
    if(!Accurment || Object.keys(Accurment).length === 0){
        return null;
    }
    return (
        <section className={`py-20 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                    <div className={`category-text ${reverse ? 'order-2' : ''}`}>
                        <h1 className="text-4xl mb-2 text-bold text-gray-800 text-decoration-uppercase ">{Accurment.category}</h1>
                        <h3 className="text-3xl mb-6 text-gray-800">{Accurment.title}</h3>
                         <p  className="text-gray-600 leading-loose mb-5">{Accurment.description}</p>
                        <div className="mt-8">
                            <h4 className="text-xl mb-2 text-gray-800">{Accurment.eventDetails?.categoryEvent}</h4>
                                <div className="flex justify-between items-center py-4 border-b border-gray-200" >
                                    <div className="program-info">
                                        <h4 className="text-xl mb-2 text-gray-800">{ new Date(Accurment.eventDetails?.date).toLocaleDateString()}</h4>
                                        <p className="text-gray-600 text-sm">Durée: {Accurment.eventDetails?.startTime} - {Accurment.eventDetails?.endTime}</p>
                                    </div>
                                 
                                </div>
                            
                        </div>
                        <div className="flex gap-4 mt-5">
                            <NavLink to="/programmes" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Voir les programmes</NavLink>
                            <NavLink to="/contact" className="inline-block py-3 px-6 bg-gray-600 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-gray-700">Demander des infos</NavLink>
                        </div>
                    </div>
                    <div className={`category-image ${reverse ? 'order-1' : ''}`}>
                        <img src={Accurment.fileurl} alt={'file'} className="w-full object-contain rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
