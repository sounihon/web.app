import axios, {AxiosInstance} from 'axios';

export const userApp: AxiosInstance = axios.create({
    baseURL: `http://localhost:9090/`
});