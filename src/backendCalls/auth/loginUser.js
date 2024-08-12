import axios from 'axios';

export const loginUser = async (values) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND}/api/users/login`, values, {
            headers: {
                "Content-Type" : "application/json"
            }
        });
        return res.data;
    } catch (error) {
        console.log('error in login logic', error);
        return error.response.data;
    }
};