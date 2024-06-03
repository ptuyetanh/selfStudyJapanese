import axios from "axios";

export const IS_AUTH = 'IS_AUTH';

export const isAuth_success = (data) => ({
    type: 'IS_AUTH',
    isAuthAction:data
});
export const isAuthUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/auth',{withCredentials: true});
            dispatch(isAuth_success(response.data.user)); 
        } catch (error) {
            console.error('Lỗi xác thực' + error);
        }
    }
}