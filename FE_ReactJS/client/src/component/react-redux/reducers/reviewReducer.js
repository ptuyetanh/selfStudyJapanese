import { COUNT_GRAMMAR, COUNT_REVIEW, COUNT_VOCAB, LEARNED_WORDS, SEARCH_WORDS } from "../actions/reviewAction"

const InitialState = {
    countReviewData: null,
    countVocabData: null,
    countGrammarData: null,
    learnedWordsData: null,
    searchWordsData: null
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
        case SEARCH_WORDS:
            return { ...state, searchWordsData: action.searchWordsAction }
        // case SET_PAGE:
        //     return { ...state, setPageData: action.setPageAction }
        default:
            return state
    }
}
export default reviewReducer