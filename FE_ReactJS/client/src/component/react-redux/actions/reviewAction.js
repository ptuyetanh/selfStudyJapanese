import axios from "axios";

export const REVIEW = 'REVIEW';
export const LEARNED_WORDS = 'LEARNED_WORDS';

const reviewSuccess = (data) => ({
    type:REVIEW,
    reviewAction:data
});
const learnedWordsSuccess = (data) => ({
    type:LEARNED_WORDS,
    learnedWordsAction:data
});

export const showReview = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/review');
            dispatch(reviewSuccess(response.data));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const learnedWords = (page,search,user_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/review/learnedwords?page=${page}&search=${search}&user_id=${user_id}`);
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