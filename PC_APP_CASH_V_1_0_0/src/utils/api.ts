import axios from 'axios';
const URL = 'https://vsmobappdev.wbsedcl.in/testSafety/testSafety';

const api = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }, 
});

//Interceptors for logging (Flipper or console)
if(__DEV__){
    api.interceptors.request.use((request) => {
        console.log('[Axios Request] ', request);
        return request;
    });

    api.interceptors.response.use(
        (response) => {
            console.log('[Axios Response] ', response);
            return response;
        },
        (error) => {
            console.log('[Axios Error] ', JSON.stringify(error));
            return error;
        }
    );
}

export default api;
