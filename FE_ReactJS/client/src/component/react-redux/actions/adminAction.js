import axios from "axios";
import { alertDOnSuccess, alertOnSuccess2, alertSOnSuccess } from "./alertAction";
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
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//active member
export const ACTIVE_MEMBER = 'ACTIVE_MEMBER';
const activeMemberSuccess = (data) => ({
    type: 'ACTIVE_MEMBER',
    activeMemberAction: data
})
export const activeMemberShow = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/activemember?page=${page}`);
            dispatch(activeMemberSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//saveActiveMember
export const SAVE_ACTIVE_MEMBER = 'SAVE_ACTIVE_MEMBER';
const saveActiveMemberSuccess = (data) => ({
    type: 'SAVE_ACTIVE_MEMBER',
    saveActiveMemberAction: data
})
export const saveActiveMember = (user_id,user) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/admin/saveactivemember/${user_id}`,user);
            dispatch(saveActiveMemberSuccess(response.data));
            dispatch(alertSOnSuccess())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//refuse active member
export const REFUSE_ACTIVE_MEMBER = 'REFUSE_ACTIVE_MEMBER';
const refuseActiveMemberSuccess = (data) => ({
    type: 'REFUSE_ACTIVE_MEMBER',
    refuseActiveMemberAction: data
})
export const refuseActiveMember = (signupmember_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/refuseactivemember/${signupmember_id}`);
            dispatch(refuseActiveMemberSuccess(response.data.signupmember_id));
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// managerAlphabet
export const MANAGER_ALPHABET = 'MANAGER_ALPHABET';
const managerAlphabetSuccess = (data) => ({
    type: 'MANAGER_ALPHABET',
    managerAlphabetAction: data
})
export const managerAlphabetShow = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/manageralphabet?page=${page}`);
            dispatch(managerAlphabetSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// addCourseAlphabet
export const ADD_COURSE_ALPHABET = 'ADD_COURSE_ALPHABET';
const addCourseAlphabetSuccess = (data) => ({
    type: ADD_COURSE_ALPHABET,
    addCourseAlphabetAction:data
})
export const addCourseAlphabet = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admin/addcoursealphabet',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(addCourseAlphabetSuccess(response.data));
        } catch (error) {
            console.log("Lỗi" + error);
        }
    }
}
//deleteAlphabet
export const DELETE_ALPHABET = 'DELETE_ALPHABET';
const deleteAlphabetSuccess = (data) => ({
    type: 'DELETE_ALPHABET',
    deleteAlphabetAction: data
})
export const deleteAlphabet = (alphabet_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/deletealphabet/${alphabet_id}`);
            dispatch(deleteAlphabetSuccess(response.data.alphabet_id));
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// managerVocab
export const MANAGER_VOCAB = 'MANAGER_VOCAB';
const managerVocabSuccess = (data) => ({
    type: 'MANAGER_VOCAB',
    managerVocabAction: data
})
export const managerVocabShow = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/managervocab?page=${page}`);
            dispatch(managerVocabSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// addCourseVocab
export const ADD_COURSE_VOCAB = 'ADD_COURSE_VOCAB';
const addCourseVocabSuccess = (data) => ({
    type: ADD_COURSE_VOCAB,
    addCourseVocabAction:data
})
export const addCourseVocab = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admin/addcoursevocab',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(addCourseVocabSuccess(response.data));
        } catch (error) {
            console.log("Lỗi" + error);
        }
    }
}
//deleteVocab
export const DELETE_VOCAB = 'DELETE_VOCAB';
const deleteVocabSuccess = (data) => ({
    type: 'DELETE_VOCAB',
    deleteVocabAction: data
})
export const deleteVocab = (vocab_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/deletevocab/${vocab_id}`);
            dispatch(deleteVocabSuccess(response.data.vocab_id));
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// managerGrammar
export const MANAGER_GRAMMAR = 'MANAGER_GRAMMAR';
const managerGrammarSuccess = (data) => ({
    type: 'MANAGER_GRAMMAR',
    managerGrammarAction: data
})
export const managerGrammarShow = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/managergrammar?page=${page}`);
            dispatch(managerGrammarSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// addCourseGrammar
export const ADD_COURSE_GRAMMAR = 'ADD_COURSE_GRAMMAR';
const addCourseGrammarSuccess = (data) => ({
    type: ADD_COURSE_GRAMMAR,
    addCourseGrammarAction:data
})
export const addCourseGrammar = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admin/addcoursegrammar',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(addCourseGrammarSuccess(response.data));
        } catch (error) {
            console.log("Lỗi" + error);
        }
    }
}
//deleteGrammar
export const DELETE_GRAMMAR = 'DELETE_GRAMMAR';
const deleteGrammarSuccess = (data) => ({
    type: 'DELETE_GRAMMAR',
    deleteGrammarAction: data
})
export const deleteGrammar = (grammar_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/deletegrammar/${grammar_id}`);
            dispatch(deleteGrammarSuccess(response.data.grammar_id));
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// managerCommunication
export const MANAGER_COMMUNICATION = 'MANAGER_COMMUNICATION';
const managerCommunicationSuccess = (data) => ({
    type: 'MANAGER_COMMUNICATION',
    managerCommunicationAction: data
})
export const managerCommunicationShow = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/admin/managercommunication?page=${page}`);
            dispatch(managerCommunicationSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
// addCourseCommunication
export const ADD_COURSE_COMMMUNICATION = 'ADD_COURSE_COMMMUNICATION';
const addCourseCommunicationSuccess = (data) => ({
    type: ADD_COURSE_COMMMUNICATION,
    addCourseCommunicationAction:data
})
export const addCourseCommunication = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admin/addcoursecommunication',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(addCourseCommunicationSuccess(response.data));
        } catch (error) {
            console.log("Lỗi" + error);
        }
    }
}
//deleteCommunication
export const DELETE_COMMUNICATION = 'DELETE_COMMUNICATION';
const deleteCommunicationSuccess = (data) => ({
    type: 'DELETE_COMMUNICATION',
    deleteGrammarAction: data
})
export const deleteCommunication = (communication_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/admin/deletecommunication/${communication_id}`);
            dispatch(deleteCommunicationSuccess(response.data.communication_id));
            dispatch(alertOnSuccess2())
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}