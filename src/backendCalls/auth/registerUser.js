import axios from "axios";

export const RegisterUser = async (values) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND}/api/users/register`, values, {
            Headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error) {
        console.log('error in registerUser', error.response.data);  
        return error.response.data;
    }
};