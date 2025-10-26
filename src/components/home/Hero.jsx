
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-200 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="hero-text">
                        <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-800">
                            Academic Training<br />
                            Center<br />
                            <span className="text-blue-500">CAMA</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Your trusted partner for academic and professional excellence. 
                            Software training, exam preparation, conferences and much more.
                        </p>
                        <div className="flex gap-4">
                           <NavLink to="/programmes" className="py-3 px-8 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5">Discover our programs</NavLink>
                            <NavLink to="/contact" className="py-3 px-8 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:-translate-y-0.5">Contact us</NavLink>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Academic Training" className="w-full h-96 object-cover rounded-lg shadow-2xl" />
                        <div className="absolute bottom-[-30px] left-[-30px] bg-white p-5 rounded-lg shadow-lg flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-500" />
                                <div>
                                    <span className="block text-2xl font-bold text-gray-800">500+</span>
                                    <span className="block text-gray-600 text-sm">Students</span>
                                    <span className="block text-gray-800 text-xs">Successfully trained</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
