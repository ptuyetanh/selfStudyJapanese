import { ALPHABET_FLASHCARD, AlPHABET_BUTTON, COMMUNICATION, GRAMMAR, SAVE_GRAMMAR, SAVE_VOCAB, VOCABULARY } from "../actions/studyAction"

const InitialState = {
    alphabetButtonData: null,
    alphabetFlashcardData: null,
    communicationData: null,
    vocabularyData: null,
    grammarData: null,
    saveVocabData:null,
    saveGrammarData:null
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
        case GRAMMAR:
            return { ...state, grammarData: action.grammarAction}
        case SAVE_VOCAB:
            return { ...state, saveVocabData: action.saveVocabAction}
        case SAVE_GRAMMAR:
            return { ...state, saveGrammarData: action.saveGrammarAction}
        default:
            return state
    }
}
export default studyReducer;