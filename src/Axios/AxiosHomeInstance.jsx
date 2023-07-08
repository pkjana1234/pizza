import axios from "axios";

const AxiosHome = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
})
export default AxiosHome