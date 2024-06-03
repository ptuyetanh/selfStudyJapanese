import axios from "axios";

export const LOG_OUT = 'LOG_OUT';
const login_success = () => ({
    type:LOG_OUT
});
export const logOutUser = () => {
    return async (dispatch) => {
        try {
            await axios.post('/logout',{},{withCredentials: true});
            dispatch(login_success());   
        } catch (error) {
            console.error('đăng xuất lỗi' + error);
        }
    }
}