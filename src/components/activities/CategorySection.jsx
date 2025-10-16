
import React from 'react';

const CategorySection = ({ title, description, programs, imageUrl, imageAlt, reverse = false }) => {
    return (
        <section className={`py-20 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                    <div className={`category-text ${reverse ? 'order-2' : ''}`}>
                        <h3 className="text-3xl mb-6 text-gray-800">{title}</h3>
                        {description.map((p, i) => <p key={i} className="text-gray-600 leading-loose mb-5">{p}</p>)}
                        <div className="mt-8">
                            {programs.map((program, i) => (
                                <div className="flex justify-between items-center py-4 border-b border-gray-200" key={i}>
                                    <div className="program-info">
                                        <h4 className="text-xl mb-2 text-gray-800">{program.name}</h4>
                                        <p className="text-gray-600 text-sm">Durée: {program.duration}</p>
                                    </div>
                                    <span className={`py-1 px-3 rounded-full text-xs font-semibold bg-${program.level.toLowerCase() === 'débutant à avancé' ? 'green' : program.level.toLowerCase() === 'intermédiaire' ? 'yellow' : 'cyan'}-100 text-${program.level.toLowerCase() === 'débutant à avancé' ? 'green' : program.level.toLowerCase() === 'intermédiaire' ? 'yellow' : 'cyan'}-800`}>{program.level}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-5">
                            <a href="programmes.html" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Voir les programmes</a>
                            <a href="contact.html" className="inline-block py-3 px-6 bg-gray-600 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-gray-700">Demander des infos</a>
                        </div>
                    </div>
                    <div className={`category-image ${reverse ? 'order-1' : ''}`}>
                        <img src={imageUrl} alt={imageAlt} className="w-full rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
