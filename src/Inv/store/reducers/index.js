import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import AlertReducer from './alertReducer';
import ModalReducer from './modalReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    alert: AlertReducer,
    modal: ModalReducer
})

export default RootReducer;