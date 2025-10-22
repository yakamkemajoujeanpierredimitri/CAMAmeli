import React, { useState } from 'react';
import DynamicForm from '../../components/admin/DynamicForm';
import { useAuth } from '../../context/authContext';
import { Register } from '../../service/auth.service';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const initialsvalue = {
        name:'',
        email:'',
        phoneNumber:''
    }
    const signUpFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required:true
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required:true,
            validation: {  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address' } }
        },
        {
            name: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
           required:true,
            validation: {  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid phonenumber' } }
        }
    ];

    const handleSubmit = async (formData) => {
        setLoading(true);
        setError(null);
        const res = await Register(formData);
        if (res.error) {
            setError(res.error);
            dispatch({ type: "ERROR", payload: res.error });
        } else {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); // Assuming registration also logs in the user
            navigate('/');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:scale-105">
                <button
                            onClick={()=>navigate('/')}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                        >
                            &times;
                        </button>
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Join Us!</h2>
                <p className="text-center text-gray-600 mb-8">Create your account to get started.</p>
                {error && <p className="text-red-600 bg-red-100 border border-red-200 p-3 rounded-md text-center mb-4">{error}</p>}
                <DynamicForm
                    schema={signUpFields}
                    onSubmit={handleSubmit}
                    submitLabel={loading ? 'Signing Up...' : 'Sign Up'}
                    initialValues={initialsvalue}
                />
                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <Link to="/signin" className="text-blue-600 hover:text-blue-800 font-medium">Sign In</Link>
                </p>
               <a href='http://localhost:5000/auth/google/signup'> <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md'>Signup with Google</button></a>
            </div>
        </div>
    );
};

export default SignUp;