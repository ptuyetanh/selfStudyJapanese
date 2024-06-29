import axios from "axios";

export const COUNT_REVIEW = 'COUNT_REVIEW';
export const COUNT_VOCAB = 'COUNT_VOCAB';
export const COUNT_GRAMMAR = 'COUNT_GRAMMAR';
export const LEARNED_WORDS = 'LEARNED_WORDS';
export const SEARCH_WORDS = 'SEARCH_WORDS';

const countReviewSuccess = (data) => ({
    type:COUNT_REVIEW,
    countReviewAction:data
});
const countVocabSuccess = (data) => ({
    type:COUNT_VOCAB,
    countVocabAction:data
});
const countGrammarSuccess = (data) => ({
    type:COUNT_GRAMMAR,
    countGrammarAction:data
});
const learnedWordsSuccess = (data) => ({
    type:LEARNED_WORDS,
    learnedWordsAction:data
});
const searchWordsSuccess = (data) => ({
    type:SEARCH_WORDS,
    searchWordsAction:data
});
export const showCountReview = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review');
            dispatch(countReviewSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const showCountVocab = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review/countvocab');
            dispatch(countVocabSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const showCountGrammar = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review/countgrammar');
            dispatch(countGrammarSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const learnedWords = (page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/review/learnedwords?page=${page}`);
            dispatch(learnedWordsSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const searchWords = (searchData) => {
    return (dispatch) => {
        try {
            dispatch(searchWordsSuccess(searchData));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu" + error);
        }
    }
}