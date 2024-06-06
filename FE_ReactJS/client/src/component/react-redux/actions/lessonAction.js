import axios from "axios";

export const VOCAB_LESSON = 'VOCAB_LESSON';
export const GRAMMAR_LESSON = 'GRAMMAR_LESSON';
export const COMMUNICATION_LESSON = 'COMMUNICATION_LESSON';
export const ALPHABET_LESSON = 'ALPHABET_LESSON';
const vocabLessonSuccess = (data) => ({
    type:VOCAB_LESSON,
    vocabLessonAction:data
})
const grammarLessonSuccess = (data) => ({
    type:GRAMMAR_LESSON,
    grammarLessonAction:data
})
const communicationLessonSuccess = (data) => ({
    type:COMMUNICATION_LESSON,
    communicationLessonAction:data
})
const alphabetLessonSuccess = (data) => ({
    type:ALPHABET_LESSON,
    alphabetLessonAction:data
})
export const vocabLessonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/vocab');
            dispatch(vocabLessonSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}
export const grammarLessonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/grammar');
            dispatch(grammarLessonSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}
export const communicationLessonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/communication');
            dispatch(communicationLessonSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}
export const alphabetLessonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/alphabet');
            dispatch(alphabetLessonSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}