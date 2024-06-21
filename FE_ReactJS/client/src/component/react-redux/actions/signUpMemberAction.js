import axios from 'axios';
import { alertDOnSuccess, alertSOnSuccess } from './alertAction';

export const SIGN_UP_MEMBER = 'SIGN_UP_MEMBER';
const signUpMemberSuccess = (data) => ({
    type: SIGN_UP_MEMBER,
    signUpMemberAction:data
})
export const signUpMemberUser = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/signupmember',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(signUpMemberSuccess(response.data));
            dispatch(alertSOnSuccess())
        } catch (error) {
            console.log("Lỗi");
            dispatch(alertDOnSuccess())
        }
    }
}