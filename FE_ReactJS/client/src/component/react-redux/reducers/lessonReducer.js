import { ALPHABET_LESSON, COMMUNICATION_LESSON, GRAMMAR_LESSON, VOCAB_LESSON } from "../actions/lessonAction"

const InitialState = {
    vocabLessonData: null,
    grammarLessonData: null,
    communicationLessonData: null,
    alphabetLessonData: null
}
const lessonReducer = (state = InitialState, action) => {
    switch (action.type) {
        case VOCAB_LESSON:
            return { ...state, vocabLessonData: action.vocabLessonAction }
        case GRAMMAR_LESSON:
            return { ...state, grammarLessonData: action.grammarLessonAction }
        case COMMUNICATION_LESSON:
            return { ...state, communicationLessonData: action.communicationLessonAction }
        case ALPHABET_LESSON:
            return { ...state, alphabetLessonData: action.alphabetLessonAction }
        default:
            return state
    }
}
export default lessonReducer;