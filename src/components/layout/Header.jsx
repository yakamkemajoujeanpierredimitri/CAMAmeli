
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="logo">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-wider">CAMA</h1>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Accueil</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>À propos</NavLink></li>
                        <li><NavLink to="/activities" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Nos Activités</NavLink></li>
                        <li><NavLink to="/programmes" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Programmes</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Galerie</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Contact</NavLink></li>
                    </ul>
                    <div className="md:hidden flex flex-col cursor-pointer">
                        <span className="w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
