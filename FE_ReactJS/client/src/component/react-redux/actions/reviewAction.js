import axios from "axios";

export const COUNT_REVIEW = 'COUNT_REVIEW';
export const COUNT_VOCAB = 'COUNT_VOCAB';
export const COUNT_GRAMMAR = 'COUNT_GRAMMAR';
export const LEARNED_WORDS = 'LEARNED_WORDS';

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
export const learnedWords = (page,search) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/review/learnedwords?page=${page}&search=${search}`);
            dispatch(learnedWordsSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//reviewVocab 
export const REVIEW_VOCAB = 'REVIEW_VOCAB';

const reviewVocabSuccess = (data) => ({
    type:REVIEW_VOCAB,
    reviewVocabAction:data
});
export const reviewVocab = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review/reviewvocab');
            dispatch(reviewVocabSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//reviewGrammar 
export const REVIEW_GRAMMAR = 'REVIEW_GRAMMAR';

const reviewGrammarSuccess = (data) => ({
    type:REVIEW_GRAMMAR,
    reviewGrammarAction:data
});
export const reviewGrammar = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review/reviewgrammar');
            dispatch(reviewGrammarSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
//updateReview
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

const updateReviewSuccess = (data) => ({
    type:UPDATE_REVIEW,
    updateReviewAction:data
});
export const updateReview = (reviews) => {
    return async (dispatch) => {
        try {
            // const reviewSelect = review.map(({review_id}) => ({review_id}))
            // console.log(reviewSelect);
            const response = await axios.put('/review/updatereview',{reviews});
            dispatch(updateReviewSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}