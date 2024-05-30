import axios from 'axios';
import { alertDOnSuccess, alertSOnSuccess } from './alertAction';

export const SIGN_UP = 'SIGN_UP';
const signUpSuccess = (data) => ({
    type: SIGN_UP,
    signUpAction:data
})
export const signUpUser = (fullname, email, phonenumber, dateofbirth, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/signup',{fullname, email, phonenumber, dateofbirth, password});
            dispatch(signUpSuccess(response.data));
            dispatch(alertSOnSuccess())
        } catch (error) {
            dispatch(alertDOnSuccess())
            // if(error.response && error.response.data){
            //     console.error("Lỗi khi đăng ký",error.response);
            // }
        }
    }
}