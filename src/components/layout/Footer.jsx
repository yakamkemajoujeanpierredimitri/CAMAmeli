
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLink, faGraduationCap, faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="footer-section">
                        <h3 className="text-2xl font-bold mb-4 text-white">CAMA</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Academic Training Center dedicated to excellence and innovation. 
                            We train the professionals of tomorrow with programs adapted 
                            to market needs.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold mb-4 text-blue-500 flex items-center gap-2"><FontAwesomeIcon icon={faLink} className="text-base" /> Quick links</h4>
                        <ul>
                            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About</Link></li>
                            <li className="mb-2"><Link to="/activities" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Our activities</Link></li>
                            <li className="mb-2"><Link to="/programs" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Programs</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold mb-4 text-blue-500 flex items-center gap-2"><FontAwesomeIcon icon={faGraduationCap} className="text-base" /> Our training courses</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">AutoCAD</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Revit</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Archicad</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">SketchUp</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Competition preparation</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold mb-4 text-blue-500 flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="text-base" /> Contact</h4>
                        <div className="text-gray-400">
                            <p className="flex items-start gap-2 mb-4"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mt-1 w-5" /> Molyko, Buea, SouthWest, Cameroon</p>
                            <p className="flex items-start gap-2 mb-4"><FontAwesomeIcon icon={faPhone} className="text-white mt-1 w-5" /> +237 67 88 52 705</p>
                            <p className="flex items-start gap-2 mb-4"><FontAwesomeIcon icon={faEnvelope} className="text-white mt-1 w-5" /> camacivmech@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-gray-700 flex-col md:flex-row gap-4 text-center">
                    <p>&copy; 2024 CAMA - Academic Training Center. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Terms of Use</a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Legal Notice</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
