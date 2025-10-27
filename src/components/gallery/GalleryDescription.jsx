
import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryDescription = () => {
    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">Our Community in Pictures<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Our gallery showcases the vibrant atmosphere of our academic center. Discover the highlights of our training sessions, professional events, interactions between students and instructors, and the achievements of our learners. Each image tells a story of dedication, learning, and success.</p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">We believe that photography captures the essence of our educational mission and the dynamism of our community. Explore our collections to experience CAMA through the eyes of those who live it every day.</p>
                    <NavLink to="/contact" className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700 mt-4 sm:mt-5">Visit our center</NavLink>
                </div>
            </div>
        </section>
    );
};

export default GalleryDescription;
