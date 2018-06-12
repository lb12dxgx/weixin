
import qs from 'qs';
import Axios from 'axios';
import router from '../router';


//let base ="http://127.0.0.1";
let base ="http://www.118-china.com";
//let base = 'http://'+ip+'/api/';
//let base = 'http://192.168.100.105:9011/api/';
export const getMeet = params => { return Axios.post(`${base}/weixin/getMeet.wei`,qs.stringify(params)).then(res => res.data); }; 
export const signMeet = params => { return Axios.post(`${base}/weixin/signMeet.wei`,qs.stringify(params)).then(res => res.data); }; 
export const getSignMeet = params => { return Axios.post(`${base}/weixin/getSignMeet.wei`,qs.stringify(params)).then(res => res.data); }; 


export const getTrainPlan = params => { return Axios.post(`${base}/weixin/getTrainPlan.wei`,qs.stringify(params)).then(res => res.data); }; 
export const signTrainPlan = params => { return Axios.post(`${base}/weixin/signTrainPlan.wei`,qs.stringify(params)).then(res => res.data); }; 

 
Axios.interceptors.request.use(
    config => {
        if (sessionStorage.getItem('accessToken')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization =sessionStorage.getItem('accessToken');
        }
        return config;
    },
    err => {

        return Promise.reject(err);
 });
 
Axios.interceptors.response.use(
    response => {
        console.log(response); 
        if (response.data.state==0) {
            /*MessageBox.alert('操作错误，请联系管理员!', '系统提示', {
                  confirmButtonText: '确定'
                });*/
        };
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                sessionStorage.removeItem('accessToken');
                MessageBox.alert('授权失效', '系统提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    router.push({ path: '/' });
                  }
                });
             }
        }
    });