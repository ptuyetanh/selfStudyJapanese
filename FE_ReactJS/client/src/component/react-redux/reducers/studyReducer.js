import { ALPHABET_FLASHCARD, AlPHABET_BUTTON, COMMUNICATION, VOCABULARY } from "../actions/studyAction"

const InitialState = {
    alphabetButtonData: null,
    alphabetFlashcardData: null,
    communicationData: null,
    vocabularyData: null
}
const studyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AlPHABET_BUTTON:
            return { ...state, alphabetButtonData: action.alphabetButtonAction }
        case ALPHABET_FLASHCARD:
            return { ...state, alphabetFlashcardData: action.alphabetFlashcardAction }
        case COMMUNICATION:
            return { ...state, communicationData: action.communicationAction }
        case VOCABULARY:
            return { ...state, vocabularyData: action.vocabularyAction}
        default:
            return state
    }
}
export default studyReducer;