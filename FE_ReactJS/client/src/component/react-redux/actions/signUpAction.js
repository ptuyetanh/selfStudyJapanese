import axios from 'axios';
export const SIGN_UP = 'SIGN_UP';
const signUpSuccess = (data) => ({
    type: SIGN_UP,
    signUp:data
})
export const signUpUser = (fullname, email, phonenumber, dateofbirth, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/signup',{fullname, email, phonenumber, dateofbirth, password});
            dispatch(signUpSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi đăng ký",error);
        }
    }
}