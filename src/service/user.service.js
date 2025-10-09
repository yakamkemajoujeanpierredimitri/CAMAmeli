import axiosInstance from "../lib/axios.config";

const updateUserinfo = async (dispatch,userData)=>{
    try {
        const response = await axiosInstance.put(`/user/update-profile`, userData);
        dispatch({type:"USER_UPDATE",payload:response.data});
        return { success:true};
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to update user information';
        console.error(error);
        return { error: errorMessage };
    }
};

const addAdmin = async ( userData)=>{
    try {
        const response = await axiosInstance.put(`/user/add-admin`, userData);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to add admin';
        console.error(error);
        return { error: errorMessage };
    }
};

const userCheck = async ()=>{
    try {
        const response = await axiosInstance.get(`/user`);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to check user information';
        console.error(error);
        return { error: errorMessage };
    }
};
export { updateUserinfo, addAdmin, userCheck };