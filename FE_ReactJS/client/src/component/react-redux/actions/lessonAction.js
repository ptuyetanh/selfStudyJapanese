import axios from "axios";

export const VOCAB_LESSON = 'VOCAB_LESSON';
export const GRAMMAR_LESSON = 'GRAMMAR_LESSON';
export const COMMUNICATION_LESSON = 'COMMUNICATION_LESSON';
export const ALPHABET_LESSON = 'ALPHABET_LESSON';
export const ALPHABET_LESSON_CONTENT = 'ALPHABET_LESSON_CONTENT';
export const VOCAB_LESSON_CONTENT = 'VOCAB_LESSON_CONTENT';
export const GRAMMAR_LESSON_CONTENT = 'GRAMMAR_LESSON_CONTENT';
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
const aLessonContentSuccess = (data) => ({
    type:ALPHABET_LESSON_CONTENT,
    aLessonContentAction:data
})
const vLessonContentSuccess = (data) => ({
    type:VOCAB_LESSON_CONTENT,
    vLessonContentAction:data
})
const gLessonContentSuccess = (data) => ({
    type:GRAMMAR_LESSON_CONTENT,
    gLessonContentAction:data
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
export const aLessonContentShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/alphabet/lessonContent');
            dispatch(aLessonContentSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}
export const vLessonContentShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/vocab/lessonContent');
            dispatch(vLessonContentSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}
export const gLessonContentShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/grammar/lessonContent');
            dispatch(gLessonContentSuccess(response.data));
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}