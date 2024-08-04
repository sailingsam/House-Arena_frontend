import axios from "axios";

export const RegisterUser = async (values) => {
    try {
        const res = await axios.post("https://house-arena-backend.onrender.com/api/users/register", values, {
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