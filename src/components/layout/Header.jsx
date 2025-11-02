

import { NavLink, useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/authContext';
import { Logout } from '../../service/auth.service';
import { useEffect, useState } from 'react';
import { getEvents } from '../../service/user.service';
const Header = () => {
    const { state ,dispatch } = useAuth();
    const { user  } = state;
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [profile , setProfile] = useState(user);
    useEffect(()=>{
        setProfile(user);
        if(user){
            handleEvents();
        }
    },[user])
    const logout = async ()=>{
        const res = await Logout();
        // update client state
        dispatch({type:'LOGOUT'});
        // navigate back to home on success
        if(res.success){
            navigate('/');
        }
    }
    const handleEvents = async ()=>{
        const res = await getEvents();
        if(res.error){
           return console.error('Failed to fetch events:', res.error);
        }
         dispatch({type:'EVENTS_UPDATE',payload:res.data});
        
    }
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="logo">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-wider">CAMA</h1>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>About</NavLink></li>
                        <li><NavLink to="/activities" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Our Activities</NavLink></li>
                        <li><NavLink to="/programs" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Programs</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Gallery</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Contact</NavLink></li>
                        {profile?.role === 'admin' &&(<li><NavLink to="/admin" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Admin</NavLink></li>)}
                        {profile?.role === 'user' &&(<li><button onClick={()=>logout()} className={'text-gray-600 hover:text-blue-500 transition duration-300'}>Logout</button ></li>)}
                        {!profile &&(<li><NavLink to="/signin" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}>Login</NavLink></li>)}

                    </ul>
                    <div className="md:hidden">
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(v => !v)}
                            className="p-2 rounded-md inline-flex items-center justify-center text-gray-800 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t">
                    <div className="container mx-auto px-4 py-4">
                        <ul className="flex flex-col space-y-3">
                            <li><NavLink to="/" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>About</NavLink></li>
                            <li><NavLink to="/activities" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Our Activities</NavLink></li>
                            <li><NavLink to="/programs" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Programs</NavLink></li>
                            <li><NavLink to="/gallery" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Gallery</NavLink></li>
                            <li><NavLink to="/contact" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Contact</NavLink></li>
                            {user?.role === 'admin' && (<li><NavLink to="/admin" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Admin</NavLink></li>)}
                            {user?.role === 'user' && (<li><button onClick={()=>{ setMenuOpen(false); logout();}} className={'text-gray-700 text-left'}>Logout</button></li>)}
                            {!user && (<li><NavLink to="/signin" onClick={()=>setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'text-gray-700'}>Login</NavLink></li>)}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
