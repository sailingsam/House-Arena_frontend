const {axiosInstance} = require('./index');

//register user
export const RegisterUser = async (user) => {
    try {
        const res = await axiosInstance.post('/api/users/register', user);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};