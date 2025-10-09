import axiosInstance from "../lib/axios.config";

const Login = async (credentials)=>{
    try {
        const response = await axiosInstance.post('/auth/login', credentials);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        console.error(error);
        return { error: errorMessage };
    }
};

const Register = async (userData)=>{
    try {
        const response = await axiosInstance.post('/auth/register', userData);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Registration failed';
        console.error(error);
        return { error: errorMessage };
    }
};

const Sendcode = async (credentials)=>{
    try {
         await axiosInstance.post('/auth/admin/login', credentials);
        return { success: true };
    } catch (error) {
        const errorMessage = error.response?.data?.message || ' failed';
        console.error(error);
        return { error: errorMessage };
    }
};

const Verify = async (credentials)=>{
    try {
        const response = await axiosInstance.post('/auth/admin/verify', credentials);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Verification failed';
        console.error(error);
        return { error: errorMessage };
    }
};

const Logout = async ()=>{
    try {
         await axiosInstance.post('/auth/logout');
        return { success:true };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Logout failed';
        console.error(error);
        return { error: errorMessage };
    }
};
export { Login, Register, Sendcode, Verify, Logout };