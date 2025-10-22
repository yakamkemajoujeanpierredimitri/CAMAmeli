import React, { useState } from 'react';
import DynamicForm from '../../components/admin/DynamicForm';
import { useAuth } from '../../context/authContext';
import { Login, Sendcode } from '../../service/auth.service';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
const [isAdmin ,setIsAdmin] = useState(false);
    const initialvalues = {
        email: ''
    }
    const signInFields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: '',
            required: true,
            validation: { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address' } }
        }
    ];



    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:scale-105">
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Welcome Back!</h2>
                <p className="text-center text-gray-600 mb-8">Sign in to continue to your account.</p>
                
                {error && <p className="text-red-600 bg-red-100 border border-red-200 p-3 rounded-md text-center mb-4">{error}</p>}

                {/* Admin toggle */}
                <div className="flex items-center justify-center mb-6">
                    <div className="mr-4 text-sm text-gray-700 font-medium">Se connecter en tant que</div>
                    <div className="flex items-center space-x-3">
                        <div className="text-xs text-gray-500">Utilisateur</div>
                        <button
                            type="button"
                            aria-pressed={isAdmin}
                            onClick={() => setIsAdmin(prev => !prev)}
                            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${isAdmin ? 'bg-indigo-600' : 'bg-gray-200'}`}
                        >
                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${isAdmin ? 'translate-x-7' : 'translate-x-1'}`}></span>
                        </button>
                        <div className={`text-sm font-semibold ${isAdmin ? 'text-indigo-700' : 'text-gray-600'}`}>{isAdmin ? 'Admin' : 'User'}</div>
                    </div>
                </div>

                <DynamicForm
                    schema={signInFields}
                    onSubmit={async (formData) => {
        setLoading(true);
        setError(null);
        const res = isAdmin ? await Sendcode(formData) : await Login(formData);
        if (res.error) {
            setError(res.error);
            dispatch({ type: "ERROR", payload: res.error });
        } else {
            if(isAdmin){
                navigate('/verify');
                return;
            }
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/');
        }
        setLoading(false);
    }}
                    submitLabel={loading ? 'Signing In...' : 'Sign In'}
                    initialValues={initialvalues}
                />
                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">Sign Up</Link>
                </p>
                <a href='http://localhost:5000/auth/google/login'> <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md'>Login with Google</button></a>
            </div>
        </div>
    );
};

export default SignIn;