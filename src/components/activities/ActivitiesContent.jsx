
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUser, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { getFileByCategory } from '../../service/file.service';
import { Title } from 'chart.js';
import Card from '../card';

const ActivitiesContent = ({Title='Fields of Activity'}) => {
    const [showModal, setShowModal] = useState(false);
    const [formations, setFormations] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const openModal = async (category, title) => {
        setSelectedCategory(category);
        setModalTitle(title);
        setShowModal(true);
        try {
            const { data } = await getFileByCategory(category);
            if (data) {
                setFormations(data);
            } else {
                setFormations([]);
            }
        } catch (error) {
            console.error("Failed to fetch formations:", error);
            setFormations([]);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setFormations([]);
        setSelectedCategory('');
        setModalTitle('');
    };
    return (
        <section className="py-12 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">{Title}<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faDesktop} className="text-3xl sm:text-4xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Software Training</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Master the most in-demand professional software in architecture and engineering. Our courses are taught by industry experts and are suitable for all levels.</p>
                        <button onClick={() => openModal('formation', 'Software Training')} className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Learn more</button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faUser} className="text-3xl sm:text-4xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Competition Preparation</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Prepare effectively for entrance exams and examinations with our proven methods. We offer intensive and personalized programs to maximize your chances of success.</p>
                        <button onClick={() => openModal('event', 'Competition Preparation')} className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Learn more</button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl sm:text-4xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Conferences & Events</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Participate in our events to stay at the forefront of the latest trends and innovations. Our conferences are led by recognized professionals in their fields.</p>
                        <button onClick={() => openModal('event', 'Conferences & Events')} className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Learn more</button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className={`bg-white rounded-lg shadow-xl p-6 sm:p-8 m-2 sm:m-4  ${formations.length > 0 ? '': 'max-w-2xl'} w-full relative`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">{modalTitle}</h3>
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl"
                        >
                            &times;
                        </button>
                        {formations.length > 0 ? (
                            
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
                                {formations.map((formation) => (
                                    <Card key={formation._id} post={formation} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-600 text-base sm:text-lg py-8">
                                Nothing available for the moment. Please check back later!
                            </p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ActivitiesContent;
