import {  REVIEW, LEARNED_WORDS, REVIEW_GRAMMAR, REVIEW_VOCAB, UPDATE_REVIEW } from "../actions/reviewAction"

const InitialState = {
    reviewData: null,
    learnedWordsData: null,
    reviewVocabData: null,
    reviewGrammarData: null,
    updateReviewData: null
}
const reviewReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REVIEW:
            return { ...state, reviewData: action.reviewAction }
        case LEARNED_WORDS:
            return { ...state, learnedWordsData: action.learnedWordsAction }
        case REVIEW_VOCAB:
            return { ...state, reviewVocabData: action.reviewVocabAction }
        case REVIEW_GRAMMAR:
            return { ...state, reviewGrammarData: action.reviewGrammarAction }
        case UPDATE_REVIEW:
            return { ...state, updateReviewData: action.updateReviewAction }
        default:
            return state
    }
}
export default reviewReducer