import axios, { AxiosInstance } from 'axios';

export const customAxiosAdmin = () => {
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    const errorHandler = async (error: any) => {
        let errorMsg;
        if (error.response && error.response.status === 400) {
            errorMsg = {
                response: {
                    data: {message: '접근 권한이 없습니다.'},
                    status: error.response.status,
                    }
            }
        }
        return Promise.reject(errorMsg);
    }
    baseAxios.interceptors.response.use(
        (response: any) => {
            return response;
        },
        error => errorHandler({ ...error })
    );

    return baseAxios;
}