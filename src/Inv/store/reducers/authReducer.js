import { SET_VALUES, SET_LOGIN, SET_PROFILE, SET_MATCHED, SET_RECEIVED } from '../constant';

const InitialState = ({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountName: '',
    accountNo: '',
    bankName: '',
    plan: '',
    profile: null,
    matched: null,
    received: null,
    login: false
})

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_VALUES:
            return {...state, ...action.payload}
        case SET_LOGIN:
            return {...state, login: true }
        case SET_PROFILE:
            return {...state, profile: action.payload}
        case SET_MATCHED:
            console.log('from reducer: ', action.payload);
            return {...state, matched: action.payload}
        case SET_RECEIVED:
            return {...state, received: action.payload}
        default:
            return state
    }
}

export default AuthReducer;