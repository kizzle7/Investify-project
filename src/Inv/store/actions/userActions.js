import { SET_VALUES, OPEN_ALERT, SET_LOGIN, SET_PROFILE, SET_MATCHED, SET_RECEIVED, NOT_VERIFIED } from '../constant';
import Processor from '../../api/requestProcessor';
import Cookie from 'js-cookie'

const setValues = (data) => (dispatch) => {
    dispatch({type: SET_VALUES, payload: data})
}

const login = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        Processor.sendPost(`https://dbservice.herokuapp.com/api/v1/login`, data).then(res => {
            console.log(res)
            if(res.data.success) {
                localStorage.setItem('_scheme', res.data.user.token)
                    localStorage.setItem('role', res.data.role)
                    Cookie.set('userData', res.data.user)
                    Cookie.set('guiderPay', res.data)
                    dispatch({ type: OPEN_ALERT, payload: {message: res.data.message, type: 'success'} });
                    dispatch({type: SET_LOGIN})
                    resolve(true)
                
            } else {
                resolve(res.data.message)
                resolve(true)
            }
        })
        .catch(err => {
            if(err) {
                reject(false)
                dispatch({ type: OPEN_ALERT, payload: {message: 'Authentication Error', type: 'danger'} })
            }
        })
    })
}

const register = (data, link) => (dispatch) => {  
    const endpoint = link.length !==0  ? `https://dbservice.herokuapp.com/api/v1/register?r=${link}` : `https://dbservice.herokuapp.com/api/v1/register`;
    return new Promise((resolve, reject) => {
        Processor.sendPost(endpoint, data).then(res => {
            if(res.data.success) {
                localStorage.setItem('_scheme', res.data.token)
                localStorage.setItem('role', res.data.role)
                Cookie.set('userData', res.data.data)
                Cookie.set('guiderPay', res.data)
                dispatch({ type: OPEN_ALERT, payload: {message: res.data.message, type: 'success'} });
                dispatch({type: SET_LOGIN})
                resolve(true)
            } else {
                resolve(res.data.message)
                resolve(true)
            }
        })
        .catch(err => {
            if(err) {
                reject(false)
                dispatch({ type: OPEN_ALERT, payload: {message: err, type: 'danger'} })
            }
        })
    })
}

const getRegister = (link) => (dispatch) => {
    return new Promise((resolve, reject) => {
        Processor.sendGet(`/user/getRegister?r=${link}`).then(res => {
            if(res.data.success) {
                resolve({success: true, user: res.data.data})
            }
        })
        .catch(err => {
            reject({ success: false, message: err.response.data.message })
        })
    })
}

const getProfile = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        Processor.sendGet(`https://dbservice.herokuapp.com/api/v1/profile/${id}`).then(res => {
            if(res.data.success) {
                dispatch({type: SET_PROFILE, payload: res.data.message})
            }
        })
        .catch(err => {
            console.log('Not verified: ', err)
            // if(err.response.data.status) {
            //     const errs = err.response.data;
            //     if(errs.status === 401) {
            //         console.log('from user actions: ',errs.data.payToverify)
            //         dispatch({type: NOT_VERIFIED, payload: {status: true, data: errs.data.payToverify}})
            //     }
            // }
        })
    })
}

const getMatchedToPay = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/user/getMatchToPay').then(res => {
            console.log('from actions: ', res.data.data)
            if(res.data.success) {
                dispatch({type: SET_MATCHED, payload: res.data.data, status: res.data.status})
            }
        })
        .catch(err => {
            console.log(err.response)
        })
    })
}

const getMatchedToReceive = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/user/getMatchedToReceive').then(res => {
            if(res.data.success) {
                console.log({res})
                if(res.data.status === 200) {
                    dispatch({type: SET_RECEIVED, payload: res.data.message})
                }
            }
        })
    })
}

const sendProof = (data, id) => (dispatch) => {
    var datas = new FormData();
    datas.append('description', data.description);
    datas.append('file', data.file)
    return new Promise((resolve, reject) => {
        Processor.sendPost(`/user/sendProof/${id}`, datas, true).then(res => {
            console.log(res)
            if(res.data.status === 200) {
                localStorage.setItem('_pf', true)
                resolve({success: true, message: res.data.message})
            }
        }).catch(err => {
            reject({err: err.response.data.message})
        })
    })
}

const getReferrals = () => () => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/user/getReferrals').then(res => {
            if(res.data.success) {
                resolve({success: true, data: res.data.data})
            }
        })
    })
}

const retrieveProof = () => () => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/user/retrieveProof').then(res => {
            console.log(res)
            if(res.data.status === 200) {
                resolve({success: true, message: res.data.message, data: res.data.data})
            } else {
                resolve({success: false, message: res.data.message})
            }
        })
    })
}

const getUserTransaction = () => () => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/user/getUerTransaction').then(res => {
            resolve({success: true, data: res});
        })
    })
}

const confirmPayment = (id) => () => {
    return new Promise((resolve, reject) => {
        Processor.sendPost(`/user/confirmPayment/${id}`).then(res => {
            console.log({res})
            if(res.data.status === 200) {
                resolve({success: true, message: res.data.message})
            }
        })
    })
}

export { setValues, login, register, getRegister, getProfile, getMatchedToPay, getMatchedToReceive, sendProof, getReferrals, retrieveProof, getUserTransaction, confirmPayment }