import axios from "axios";

export const VOCAB_LESSON = 'VOCAB_LESSON';
const vocabLessonSuccess = (data) => ({
    type:VOCAB_LESSON,
    vocabLessonAction:data
})

export const vocabLessonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/lesson/vocab');
            dispatch(vocabLessonSuccess(response.data));
            console.log(response.data);
        } catch (error) {
            console.error("lấy dữ liệu lỗi");
        }
    }
}