import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://meliproject.onrender.com',
    withCredentials:true,
});
export default axiosInstance;