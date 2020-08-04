import config from '../config';
import axios from 'axios';
import EventEmitter from 'eventemitter3';

axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = config.baseUrl;

var refreshing = false;
var count = 0;

//interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log("error request22", error.config.headers["x-access-token"])
    if (error) {
        let config = error.config;

        console.log({error, config})
        if (error && error.response.status === 401){
            localStorage.clear();
            // window.location.reload()
            //make refreshtoken request
            // if (!refreshing && count <= 5) {
            //     refreshing = true;
            //     count++;
            //     var axiosClient = axios.create();
            //     console.log('nawa o')
            //     return axiosClient.post('/user/refreshToken').then(result => {
            //         console.log('request processor1: ', result)
            //         if (result.status === 200) {
            //             //reset the access token in the axios default and resend the failed request
            //             axios.defaults.headers["x-access-token"] = result.token;
            //             localStorage.setItem('_scheme', result.token); // saving in localstorage
            //             refreshing = false;
            //             config.headers["x-access-token"] = result.token;
            //             return axios(config);
            //         }
            //     }).catch(error => {
            //         //something went wrong;
            //         refreshing = false;
            //         var eventObj = new EventEmitter();
            //         eventObj.emit("token_authorized");
            //         return Promise.reject({ success: false, status: 401, message: 'authorized access' })
            //     })
            // }
        } else {
            if (error.response.status === 401 && config.url.toLowerCase() === '/auth/loginuser') {
                return Promise.reject(error.response);
            } else {
                return Promise.reject(error);
            }
            // return error;
        }
    } else {
        return Promise.reject(error);
    }
});

class processRequest {
    sendGet(url) { 
        return axios.get(url);
     }
    
    sendPost(url, data = {}, form = false) {
        if (form) axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        return axios.post(url, data);
    }

    sendPut(url, data) {
        return axios.put(url, data);
    }

    sendDelete(url) {
        return axios.delete(url)
    }
}


export default new processRequest; 