import axiosInstance from "../lib/axios.config";

const createFile = async (fileData , onUploadProgress)=>{
    try {
        const response = await axiosInstance.post('/post/created', fileData,{
            headers:{'Content-Type':'multipart/form-data'},
            onUploadProgress: (progressEvent)=>{
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                onUploadProgress(progress);
            }
        });
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'File creation failed';
        console.error(error);
        return { error: errorMessage };
    }
};

const getAllFiles = async ()=>{
    try {
        const response = await axiosInstance.get('/post/getall');
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to retrieve files';
        console.error(error);
        return { error: errorMessage };
    }
};

const getFileById = async (fileId)=>{
    try {
        const response = await axiosInstance.get(`/post/${fileId}`);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to retrieve file';
        console.error(error);
        return { error: errorMessage };
    }
};
const getFileByCategory = async (categoryId)=>{
    try {
        const response = await axiosInstance.get(`/post/getfile/${categoryId}`);
        //console.log(response.data);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to retrieve files';
        console.error(error);
        return { error: errorMessage };
    }
};
const updateFile = async (fileId, fileData)=>{
    try {
        const response = await axiosInstance.put(`/post/${fileId}`, fileData);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to update file';
        console.error(error);
        return { error: errorMessage };
    }
};
const deleteFile = async (fileId)=>{
    try {
         await axiosInstance.delete(`/post/${fileId}`);
        return { success:true };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to delete file';
        console.error(error);
        return { error: errorMessage };
    }
};
const applianceNumber = async ()=>{
    try {
        const response = await axiosInstance.get('/post/student');
        console.log(response.data);
        return { data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to retrieve appliance number';
        console.error(error);
        return { error: errorMessage };
    }
}
export {
    deleteFile,
    createFile,
    getAllFiles,
    getFileById,
    getFileByCategory,
    updateFile,
    applianceNumber
}