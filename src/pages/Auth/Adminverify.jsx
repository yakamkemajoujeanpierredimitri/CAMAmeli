import React, { useState } from 'react';
import DynamicForm from '../../components/admin/DynamicForm';
import { useAuth } from '../../context/authContext';
import { Login, Verify } from '../../service/auth.service';
import { useNavigate, Link } from 'react-router-dom';

const AdminVerify = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const initialvalues = {
        email: '',
        code:''
    }
    const signInFields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: '',
            required: true,
            validation: { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address' } }
        },
        {
            name: 'code',
            label: 'Code',
            type: 'password',
            placeholder: '',
            required: true,
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
                <p className="text-center text-gray-600 mb-8">Sign in to continue to your account. You will receive the code in your email.</p>
                {error && <p className="text-red-600 bg-red-100 border border-red-200 p-3 rounded-md text-center mb-4">{error}</p>}
                <DynamicForm
                    schema={signInFields}
                    onSubmit={async (formData) => {
        setLoading(true);
        setError(null);
        const res = await Verify(formData);
        if (res.error) {
            setError(res.error);
            dispatch({ type: "ERROR", payload: res.error });
        } else {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/admin');
        }
        setLoading(false);
    }}
                    submitLabel={loading ? 'Signing In...' : 'Sign In'}
                    initialValues={initialvalues}
                />
                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminVerify;