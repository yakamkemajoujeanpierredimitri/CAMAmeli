import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createFile, getFileByCategory } from '../../service/file.service';

const AdminTemoignages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [testimonies, setTestimonies] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'temoignage',
        price: 0,
        file: null,
        location: '',
        date: '',
        apply: 0,
        categoryEvent: ''
    });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchTestimonies = async () => {
            const result = await getFileByCategory('temoignage');
            if (result.error) {
                console.error(result.error);
            } else {
                setTestimonies(result.data);
            }
        };
        fetchTestimonies();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        const result = await createFile(data, setProgress);
        if (result.error) {
            // Handle error
            console.error(result.error);
        } else {
            // Handle success
            console.log(result.data);
            setIsModalOpen(false);
            // Refresh the list of testimonies
            const fetchResult = await getFileByCategory('temoignage');
            if (!fetchResult.error) {
                setTestimonies(fetchResult.data);
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-md relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-4xl animate-spin-slow mr-3">
                                <i className="bi bi-gear-fill text-white"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-shadow">Administration CAMA</h1>
                                <p className="text-sm opacity-90">Panneau de contrôle</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                                <i className="bi bi-box-arrow-right mr-2"></i>
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40">
                <div className="container mx-auto">
                    <ul className="flex justify-center p-2">
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin">
                                <i className="bi bi-speedometer2 mr-2"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/formations">
                                <i className="bi bi-book mr-2"></i>
                                Formations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/evenements">
                                <i className="bi bi-calendar-event mr-2"></i>
                                Événements
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/temoignages">
                                <i className="bi bi-chat-quote mr-2"></i>
                                Témoignages
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/statistiques">
                                <i className="bi bi-graph-up mr-2"></i>
                                Statistiques
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Gestion des Témoignages</h2>
                            <p className="text-gray-600 mt-1">Modérez et gérez les témoignages des étudiants</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Ajouter Témoignage
                        </button>
                    </div>

                    {/* Témoignages Table */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-5 border-b border-gray-200">
                            <h5 className="text-lg font-semibold text-gray-800">
                                <i className="bi bi-table mr-2"></i>
                                Liste des Témoignages
                            </h5>
                        </div>
                        <div className="p-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auteur</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Témoignage</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {testimonies.map(testimony => (
                                            <tr key={testimony._id} className="hover:bg-gray-50 transition-colors duration-200">
                                                <td className="py-4 px-5">
                                                    <div className="flex items-center">
                                                        <div className="text-3xl text-gray-400 mr-3"><i className="bi bi-person-circle"></i></div>
                                                        <div>
                                                            <div className="font-semibold text-gray-800">{testimony.user.name}</div>
                                                            <div className="text-sm text-gray-500">{testimony.user.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-5 max-w-xs">
                                                    <p className="text-gray-600 text-sm truncate">{testimony.description}</p>
                                                    <button className="text-blue-600 hover:underline text-sm mt-1">Lire la suite</button>
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600">
                                                    <div>{new Date(testimony.createdAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <div className="flex items-center space-x-2">
                                                        <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200" title="Voir détails">
                                                            <i className="bi bi-eye text-lg"></i>
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-800 transition-colors duration-200" title="Supprimer">
                                                            <i className="bi bi-trash text-lg"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <form onSubmit={handleSubmit}>
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Nouveau Témoignage</h3>
                                    <div className="mt-2">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Titre</label>
                                            <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                            <textarea name="description" value={formData.description} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Fichier</label>
                                            <input type="file" name="file" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>
                                        {progress > 0 && <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>}
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Créer
                                    </button>
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTemoignages;