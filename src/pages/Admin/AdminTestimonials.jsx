import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createFile, getFileByCategory, deleteFile } from '../../service/file.service';
import DynamicForm from '../../components/admin/DynamicForm';

const AdminTestimonials = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [testimonies, setTestimonies] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'temoignage',
        file: null,
        date: '',
        categoryEvent: '',
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

    const handleDelete = async(id)=>{
        const res  = await deleteFile(id);
        if(res.success){
            setTestimonies(prev => prev.filter(t => t._id !== id));
            alert('Testimonial successfully deleted');
        }else{
            console.error('Error during deletion:', res.error);
        }
    }

    const handleFormSubmit = async (formDataFd) => {
        // DynamicForm will submit a FormData when creating
        const result = await createFile(formDataFd, setProgress);
        if (result.error) {
            console.error(result.error);
            alert('Error creating testimonial: ' + result.error);
        } else {
            setIsModalOpen(false);
            // Refresh the list of testimonies
           setTestimonies(prev => [...prev, result.data]);
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
                                <h1 className="text-2xl font-bold text-shadow">CAMA Administration</h1>
                                <p className="text-sm opacity-90">Control Panel</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                                <i className="bi bi-box-arrow-right mr-2"></i>
                                Logout
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
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/trainings">
                                <i className="bi bi-book mr-2"></i>
                                Trainings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/events">
                                <i className="bi bi-calendar-event mr-2"></i>
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/testimonials">
                                <i className="bi bi-chat-quote mr-2"></i>
                                Testimonials
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/statistics">
                                <i className="bi bi-graph-up mr-2"></i>
                                Statistics
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
                            <h2 className="text-3xl font-bold text-gray-800">Testimonial Management</h2>
                            <p className="text-gray-600 mt-1">Moderate and manage student testimonials</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Add Testimonial
                        </button>
                    </div>

                    {/* Témoignages Table */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-5 border-b border-gray-200">
                            <h5 className="text-lg font-semibold text-gray-800">
                                <i className="bi bi-table mr-2"></i>
                                List of Testimonials
                            </h5>
                        </div>
                        <div className="p-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testimonial</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Media</th>
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
                                                            <div className="font-semibold text-gray-800">{testimony?.user?.name}</div>
                                                            <div className="text-sm text-gray-500">{testimony?.user?.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-5 max-w-xs">
                                                    <p className="text-gray-600 text-sm truncate">{testimony.description}</p>
                                                    <button className="text-blue-600 hover:underline text-sm mt-1">Read more</button>
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600 w-36">
                                                    {/* Media preview: try common places where the API may expose the uploaded media */}
                                                    {(() => {
                                                        const src = testimony?.fileurl || null;
                                                        if (!src) return <div className="text-xs text-gray-400">No media</div>;
                                                       
                                                        // quick heuristic: if url ends with typical image extensions or contains 'jpg','png','jpeg','gif' show img
                                                        if (testimony?.format === 'image') {
                                                            return <img src={src} alt="media" className="w-24 h-16 object-cover rounded" />;
                                                        }
                                                        // mp4, webm, ogg -> video
                                                        if (testimony?.format === 'video') {
                                                            return (
                                                                <video className="w-32 h-20 rounded" controls>
                                                                    <source src={src} />
                                                                    Your browser does not support video playback.
                                                                </video>
                                                            );
                                                        }
                                                        // fallback: display link / filename
                                                        return <div className="text-sm text-gray-700 truncate max-w-[150px]">{String(src).split('/').pop()}</div>;
                                                    })()}
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600">
                                                    <div>{new Date(testimony.createdAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <div className="flex items-center space-x-2">
                                                        <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200" title="View details">
                                                            <i className="bi bi-eye text-lg"></i>
                                                        </button>
                                                        <button onClick={()=>handleDelete(testimony._id)} className="text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-200" title="Delete">
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
                <div className="fixed z-20 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">New Testimonial</h3>
                                <div className="mt-2">
                                    <DynamicForm
                                        schema={[
                                            { name: 'title', label: 'Title', type: 'text', required: false },
                                            { name: 'description', label: 'Description', type: 'textarea', required: true },
                                            { name: 'file', label: 'File (image/video)', type: 'file', required: true },
                                            { name: 'date', label: 'Date', type: 'date', required: true},
                                            { name: 'categoryEvent', label: 'Category Detail', type: 'select', required: true , options: [
                                                    { value: 'software', label: 'Software Development' },
                                                    { value: 'concours', label: 'Competition' },
                                                    { value: 'business', label: 'Business' },
                                                ] },
                                        ]}
                                        initialValues={formData}
                                        submitLabel="Create"
                                        onSubmit={handleFormSubmit}
                                    />
                                    {progress > 0 && <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>}
                                    <div className="mt-4 text-right">
                                        <button type="button" onClick={() => setIsModalOpen(false)} className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}        </div>
    );
};

export default AdminTestimonials;