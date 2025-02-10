import axios from "axios";


const axiosSecure = axios.create({
<<<<<<< HEAD
    baseURL: "https://student-management-server-soft.vercel.app/",
    // baseURL: 'http://192.168.0.102:3000/',
=======
    // baseURL: "https://student-management-server-soft.vercel.app/",
    baseURL: 'http://192.168.0.102:3000/',
>>>>>>> b6dc0871da6db72147bb3a25dd35db2a8d887e1c
    headers: {
        'content-type': 'application/json'
    },
    // withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;