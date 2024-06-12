import { ALPHABET_FLASHCARD, AlPHABET_BUTTON } from "../actions/studyAction"

const InitialState = {
    alphabetButtonData: null,
    alphabetFlashcardData: null
}
const studyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AlPHABET_BUTTON:
            return { ...state, alphabetButtonData: action.alphabetButtonAction }
        case ALPHABET_FLASHCARD:
            return { ...state, alphabetFlashcardData: action.alphabetFlashcardAction }
        default:
            return state
    }
}
export default studyReducer;