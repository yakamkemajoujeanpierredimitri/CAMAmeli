import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createFile, deleteFile, getFileByCategory, updateFile } from '../../service/file.service';
import DynamicForm from '../../components/admin/DynamicForm';

const AdminFormations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formations, setFormations] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'formation',
        price: 0,
        file: null,
        location: '',
        date: '',
        apply: '',
        categoryEvent: '',
        startTime: '',
        endTime: '',
        status:'',
    });
    const [selectedFormation, setSelectedFormation] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const resetFormData = () => ({
        title: '',
        description: '',
        category: 'formation',
        price: 0,
        file: null,
        location: '',
        date: '',
        apply: '',
        categoryEvent: '',
        startTime: '',
        endTime: '',
        status:'',
    });

    const formatDate = (iso) => {
        if (!iso) return '';
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    };

    const formatTime = (isoOrTime) => {
        if (!isoOrTime) return '';
        // If it's an ISO string, parse; otherwise assume already HH:MM or similar
        const d = new Date(isoOrTime);
        if (!Number.isNaN(d.getTime())) {
            const hh = String(d.getHours()).padStart(2, '0');
            const mm = String(d.getMinutes()).padStart(2, '0');
            return `${hh}:${mm}`;
        }
        return isoOrTime;
    };
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchFormations = async () => {
            const result = await getFileByCategory('formation');
            if (result.error) {
                console.error(result.error);
            } else {
                setFormations(result.data);
            }
        };
        fetchFormations();
    }, []);


const handleDelete = async(id)=>{
    const res  = await deleteFile(id);
    if(res.success){
        setFormations(prev => prev.filter(formation => formation._id !== id));
        alert('Formation supprimée avec succès');
    }else{
        console.error('Erreur lors de la suppression de la formation :', res.error);
    }
}

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
            <nav className="bg-white shadow-sm sticky top-0 ">
                <div className="container mx-auto">
                    <ul className="flex justify-center p-2">
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin">
                                <i className="bi bi-speedometer2 mr-2"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/formations">
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
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/temoignages">
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
                            <h2 className="text-3xl font-bold text-gray-800">Gestion des Formations</h2>
                            <p className="text-gray-600 mt-1">Créez et gérez les programmes de formation CAMA</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Nouvelle Formation
                        </button>
                    </div>

                    {/* Formations Table */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-5 border-b border-gray-200">
                            <h5 className="text-lg font-semibold text-gray-800">
                                <i className="bi bi-table mr-2"></i>
                                Liste des Formations
                            </h5>
                        </div>
                        <div className="p-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formation</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inscriptions</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {formations.map(formation => (
                                            <tr key={formation._id} className="hover:bg-gray-50 transition-colors duration-200">
                                                <td className="py-4 px-5">
                                                    <div className="font-semibold text-gray-800">{formation.filename.toUpperCase()}</div>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        <span className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                                                            <i className="bi bi-clock mr-1"></i> { new Date(formation?.eventDetails?.date).toLocaleDateString()}
                                                        </span>
                                                        <span className="inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                            <i className="bi bi-geo-alt mr-1"></i> {formation?.eventDetails?.location}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <span className={`inline-flex items-center bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold`}>
                                                        <i className={`bi ${formation?.eventDetails?.categoryEvent === 'concours' ? 'bi-trophy' : 'bi-laptop'} mr-1`}></i> {formation?.eventDetails?.categoryEvent} 
                                                    </span>
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600">
                                                    <div>{formation?.eventDetails?.startTime ? formation?.eventDetails?.startTime : ''} - {formation?.eventDetails?.endTime ? formation?.eventDetails?.endTime : ''} </div>
                                                </td>
                                                <td className="py-4 px-5 text-sm font-semibold text-gray-800">{formation.price > 0 ? formation.price + ' FCFA' : 'Gratuit'}</td>
                                                <td className="py-4 px-5">
                                                    <div className="text-sm text-gray-600"><i className="bi bi-people mr-1"></i> {formation?.eventDetails?.apply ? formation?.eventDetails?.apply : 'Illimité'}</div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${formation?.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                        <i className={`bi ${formation?.status === 'active' ? 'bi-check-circle' : 'bi-pause-circle'} mr-1`}></i> {formation?.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                                            title="Modifier"
                                                            onClick={() => {
                                                                // populate form with the selected formation's values
                                                                const fd = {
                                                                    title: formation.filename || formation.title || '',
                                                                    description: formation.description || '',
                                                                    categoryEvent: formation?.eventDetails?.categoryEvent || '',
                                                                    price: formation.price || 0,
                                                                    // don't prefill file input (files can't be set programmatically)
                                                                    file: null,
                                                                    date: formatDate(formation?.eventDetails?.date),
                                                                    location: formation?.eventDetails?.location || '',
                                                                    apply: formation?.eventDetails?.apply || '',
                                                                    startTime: formatTime(formation?.eventDetails?.startTime),
                                                                    endTime: formatTime(formation?.eventDetails?.endTime),
                                                                    status: formation?.status || '',
                                                                    category: 'formation',
                                                                };
                                                                setFormData(fd);
                                                                setSelectedFormation(formation);
                                                                setIsEditing(true);
                                                                setIsModalOpen(true);
                                                            }}
                                                        >
                                                            <i className="bi bi-pencil text-lg"></i>
                                                        </button>
                                                        <button onClick={()=>handleDelete(formation._id)} className="text-red-600 hover:text-red-800 transition-colors duration-200" title="Supprimer">
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
{isModalOpen && ( <div className="fixed inset-0 transition-opacity duration-300 ">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>)}
            {isModalOpen && (
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        {/* Backdrop - lower z so modal content sits above it */}
                       
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                        {/* Modal content - higher z to avoid being dimmed by backdrop */}
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-60 isolate">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Nouvelle Formation</h3>
                                <div className="mt-2">
                                    <DynamicForm
                                        schema={(function(){
                                            const base = [
                                                { name: 'title', label: 'Titre', type: 'text', required: true },
                                                { name: 'description', label: 'Description', type: 'textarea', required: true },
                                                { name: 'categoryEvent', label: 'Catégorie Détail', type: 'select', required: true , options: [
                                                    { value: 'software', label: 'Développement Logiciel' },
                                                    { value: 'concours', label: 'Concours' },
                                                    { value: 'business', label: 'Business' },
                                                ] },
                                                { name: 'status', label: 'Statut', type: 'select', required: true, options: [
                                                    { value: 'active', label: 'Actif' },
                                                    { value: 'inactive', label: 'Inactif' },
                                                ] },
                                                { name: 'price', label: 'Prix (FCFA)', type: 'number'   },
                                                { name: 'date', label: 'Date', type: 'date' , required:true },
                                                { name: 'location', label: 'Lieu', type: 'text'  , required:true},
                                                { name: 'apply', label: "Inscriptions ", type: 'number' , placeholder:'le nombre maximum d\'inscriptions' , required:true},
                                                { name: 'startTime', label: "Heure de début", type: 'time' , placeholder: 'e.g., 9:00 AM' , required:true},
                                                { name: 'endTime', label: "Heure de fin", type: 'time' , placeholder: 'e.g., 5:00 PM' , required:true},
                                            ];
                                            if (!isEditing) {
                                                // insert file field after price when creating
                                                const fileField = { name: 'file', label: 'Fichier', type: 'file', placeholder: 'l\'image de presentation della formation', required: true };
                                                const idx = base.findIndex(f => f.name === 'price');
                                                if (idx >= 0) base.splice(idx+1, 0, fileField);
                                                else base.push(fileField);
                                            }
                                            return base;
                                        })()}
                                        initialValues={formData}
                                        submitLabel={isEditing ? 'Mettre à jour' : 'Créer'}
                                        onSubmit={async (formDataFd) => {
                                            if (isEditing && selectedFormation) {
                                                // call update API
                                                const result = await updateFile(selectedFormation._id, formDataFd);
                                                if (result?.error) {
                                                    console.error(result.error);
                                                } else {
                                                    setIsModalOpen(false);
                                                    setIsEditing(false);
                                                    setSelectedFormation(null);
                                                    setFormData(resetFormData());
                                                    const fetchResult = await getFileByCategory('formation');
                                                    if (!fetchResult.error) setFormations(fetchResult.data);
                                                }
                                            } else {
                                                // create new
                                                const result = await createFile(formDataFd, setProgress);
                                                if (result?.error) {
                                                    console.error(result.error);
                                                    alert(result.error);
                                                } else {
                                                    setIsModalOpen(false);
                                                    const fetchResult = await getFileByCategory('formation');
                                                    if (!fetchResult.error) setFormations(fetchResult.data);
                                                }
                                            }
                                        }}
                                    />
                                    {progress > 0 && <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>}
                                    <div className="mt-4 text-right">
                                        <button type="button" onClick={() => setIsModalOpen(false)} className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                                            Annuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminFormations;