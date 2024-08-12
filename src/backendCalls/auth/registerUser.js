// import axios from "axios";

// export const RegisterUser = async (values) => {
//     try {
//         const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND}/api/users/register`, values, {
//             Headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         return res.data;
//     } catch (error) {
//         console.log('error in registerUser', error.response.data);  
//         return error.response.data;
//     }
// };
import axios from "axios";

export const RegisterUser = async (values) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
        const res = await axios.post(`${baseUrl}/api/users/register`, values, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error) {
        console.log('error in registerUser', error.response?.data || error.message);  
        return error.response?.data || { success: false, message: error.message };
    }
};