import axios from "axios";
import { alertDOnSuccess, alertSOnSuccess } from "./alertAction";
//COUNT
export const COUNT_USER = 'COUNT_USER';
export const COUNT_MEMBER = 'COUNT_MEMBER';
export const COUNT_VOCAB = 'COUNT_VOCAB';
export const COUNT_GRAMMAR = 'COUNT_GRAMMAR';
export const COUNT_ALPHABET = 'COUNT_ALPHABET';
export const COUNT_COMMUNICATION = 'COUNT_COMMUNICATION';
const countUserSuccess = (data) => ({
    type:COUNT_USER,
    countUserAction:data
})
const countMemberSuccess = (data) => ({
    type:COUNT_MEMBER,
    countMemberAction:data
})
const countAlphabetSuccess = (data) => ({
    type:COUNT_ALPHABET,
    countAlphabetAction:data
})
const countVocabSuccess = (data) => ({
    type:COUNT_VOCAB,
    countVocabAction:data
})
const countGrammarSuccess = (data) => ({
    type:COUNT_GRAMMAR,
    countGrammarAction:data
})
const countCommunicationSuccess = (data) => ({
    type:COUNT_COMMUNICATION,
    countCommunicationAction:data
})
export const countUserShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countuser');
            dispatch(countUserSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const countMemberShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countmember');
            dispatch(countMemberSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const countVocabShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countvocab');
            dispatch(countVocabSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const countAlphabetShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countalphabet');
            dispatch(countAlphabetSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const countGrammarShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countgrammar');
            dispatch(countGrammarSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const countCommunicationShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/countcommunication');
            dispatch(countCommunicationSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//new user
export const NEW_USER = 'NEW_USER';
const newUserSuccess = (data) => ({
    type: 'NEW_USER',
    newUserAction: data
})
export const newUserShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/newuser');
            dispatch(newUserSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//newsignupmember
export const NEW_SIGNUP_MEMBER = 'NEW_SIGNUP_MEMBER';
const newSignUpMemberSuccess = (data) => ({
    type: 'NEW_SIGNUP_MEMBER',
    newSignUpMemberAction: data
})
export const newSignUpMemberShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/admin/newsignupmember');
            dispatch(newSignUpMemberSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//manageruser
export const MANAGER_USER = 'MANAGER_USER';
const managerUserSuccess = (data) => ({
    type: 'MANAGER_USER',
    managerUserAction: data
})
export const managerUserShow = (page,search) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/manageruser?page=${page}&search=${search}`);
            dispatch(managerUserSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// edit User 
export const EDIT_USER = 'EDIT_USER';
const editUserSuccess = (data) => ({
    type: 'EDIT_USER',
    editUserAction: data
})
export const editUser = (user_id,user) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/admin/manageruser/${user_id}`,user);
            dispatch(editUserSuccess(response.data));
            dispatch(alertSOnSuccess())
        } catch (error) {
            dispatch(alertDOnSuccess())
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// delete User 
export const DELETE_USER = 'DELETE_USER';
const deleteUserSuccess = (data) => ({
    type: 'DELETE_USER',
    deleteUserAction: data
})
export const deleteUser = (user_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/manageruser/${user_id}`);
            dispatch(deleteUserSuccess(response.data.user_id));
            dispatch(alertSOnSuccess())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
