import axios from 'axios';

export const loginUser = async (values) => {
    try {
        const res = await axios.post("http://localhost:3999/api/users/login", values, {
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