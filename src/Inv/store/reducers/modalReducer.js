import { NOT_VERIFIED } from '../constant';

const InitialState = {
    verifiedStatus: false,
    guiderDetails: {}
}

const ModalReducer = (state = InitialState, action) => {
    switch (action.type) {
        case NOT_VERIFIED:
            console.log('from modal reducer: ',action.payload)
            return {...state, verifiedStatus: action.payload.status, guiderDetails: action.payload.data}
        default:
            return state
    }
}

export default ModalReducer;