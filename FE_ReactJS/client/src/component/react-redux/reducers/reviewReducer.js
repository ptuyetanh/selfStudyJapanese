import { COUNT_GRAMMAR, COUNT_REVIEW, COUNT_VOCAB, LEARNED_WORDS, REVIEW_GRAMMAR, REVIEW_VOCAB, UPDATE_REVIEW } from "../actions/reviewAction"

const InitialState = {
    countReviewData: null,
    countVocabData: null,
    countGrammarData: null,
    learnedWordsData: null,
    reviewVocabData: null,
    reviewGrammarData: null,
    updateReviewData: null
}
const reviewReducer = (state = InitialState, action) => {
    switch (action.type) {
        case COUNT_REVIEW:
            return { ...state, countReviewData: action.countReviewAction }
        case COUNT_VOCAB:
            return { ...state, countVocabData: action.countVocabAction }
        case COUNT_GRAMMAR:
            return { ...state, countGrammarData: action.countGrammarAction }
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