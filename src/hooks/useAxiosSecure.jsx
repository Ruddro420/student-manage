import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json'
    },
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;