import axios from 'axios';
import { alertDOnSuccess } from './alertAction';
// import { isAuth_success } from './authAction';
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
        } catch (error) {
            dispatch(alertDOnSuccess())
            console.error("Lỗi đăng nhập");
        }
    }
}