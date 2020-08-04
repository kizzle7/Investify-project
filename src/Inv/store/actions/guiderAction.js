import Processor from '../../api/requestProcessor';

const getVerification = () => () => {
    return new Promise((resolve, reject) => {
        console.log('getVerification')
        Processor.sendGet('/guider/getVerification').then(res => {
            console.log('response from verification', res);
            resolve({success: true, data: res.data.message})
        })
    })
}

const getConfirmPayment = () => () => {
    return new Promise((resolve, reject) => {
        Processor.sendGet('/guider/getUserForPayment').then(res => {
            console.log('response from getUserForPayment: ', res)
            resolve({success: true, data: res.data.message})
        })
    })
}

const verifyUser = (id) => () => {
    return new Promise((resolve, reject) => {
        Processor.sendPost(`/guider/verifyUser/${id}`).then(res => {
            if(res.data.status === 200) {
                resolve({success: true, message: res.data.message})
            }
        })
    })
}

export { getVerification, getConfirmPayment, verifyUser }