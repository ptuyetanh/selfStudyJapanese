import axios from 'axios';
import { alertDOnSuccess } from './alertAction';
import { isAuthUser } from './authAction';
export const LOG_IN = 'LOG_IN';

const logInSuccess = (data) => ({
    type:'LOG_IN',
    logInAction: data
})
export const logInUser = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/login', { email,password}, {withCredentials:true});
            dispatch(logInSuccess(response.data));
            dispatch(isAuthUser())
        } catch (error) {
            dispatch(alertDOnSuccess())
            console.error("Lỗi đăng nhập");
        }
    }
}