import { ALPHABET_FLASHCARD, AlPHABET_BUTTON, COMMUNICATION } from "../actions/studyAction"

const InitialState = {
    alphabetButtonData: null,
    alphabetFlashcardData: null,
    communicationData: null
}
const studyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AlPHABET_BUTTON:
            return { ...state, alphabetButtonData: action.alphabetButtonAction }
        case ALPHABET_FLASHCARD:
            return { ...state, alphabetFlashcardData: action.alphabetFlashcardAction }
        case COMMUNICATION:
            return { ...state, communicationData: action.communicationAction }
        default:
            return state
    }
}
export default studyReducer;