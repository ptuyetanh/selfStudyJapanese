import { VOCAB_LESSON } from "../actions/lessonAction"

const InitialState = {
    vocabLessonData: null
}
const lessonReducer = (state = InitialState, action) => {
    switch (action.type) {
        case VOCAB_LESSON:
            return {...state,vocabLessonData: action.vocabLessonAction}
        default:
            return state
    }
}
export default lessonReducer;