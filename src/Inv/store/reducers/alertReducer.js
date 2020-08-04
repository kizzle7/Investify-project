import { OPEN_ALERT, CLOSE_ALERT } from '../constant';

const InitialState = {
    status: false,
    message: '',
    type: ''
}

const AlertReducer = (state = InitialState, action) => {
    switch (action.type) {
        case OPEN_ALERT:
            return {status: true, ...action.payload}
        case CLOSE_ALERT:
            return {status: false, message: '', type: ''}
        default:
            return state
    }
}

export default AlertReducer;