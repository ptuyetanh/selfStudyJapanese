import { ACTIVE_MEMBER, ADD_COURSE_ALPHABET, ADD_COURSE_COMMMUNICATION, ADD_COURSE_GRAMMAR, ADD_COURSE_VOCAB, COUNT_ALPHABET, COUNT_COMMUNICATION, COUNT_GRAMMAR, COUNT_MEMBER, COUNT_USER, COUNT_VOCAB, DELETE_ALPHABET, DELETE_COMMUNICATION, DELETE_GRAMMAR, DELETE_USER, DELETE_VOCAB, EDIT_USER, MANAGER_ALPHABET, MANAGER_COMMUNICATION, MANAGER_GRAMMAR, MANAGER_USER, MANAGER_VOCAB, NEW_SIGNUP_MEMBER, NEW_USER, REFUSE_ACTIVE_MEMBER, SAVE_ACTIVE_MEMBER } from "../actions/adminAction"

const InitialState = {
    countUserData: null,
    countMemberData: null,
    countVocabData: null,
    countGrammarData: null,
    countAlphabetData: null,
    countCommunicationData: null,
    newUserData: null,
    newSignUpMemberData: null,
    managerUserData: null,
    activeMemberData: null,
    managerAlphabetData: null,
    addCourseAlphabetData: null,
    managerVocabData: null,
    addCourseVocabData: null,
    managerGrammarData: null,
    addCourseGrammarData: null,
    managerCommunicationData: null,
    addCourseCommunicationData: null
}
const adminReducer = (state = InitialState, action) => {
    switch (action.type) {
        //count
        case COUNT_USER:
            return { ...state, countUserData: action.countUserAction }
        case COUNT_MEMBER:
            return { ...state, countMemberData: action.countMemberAction }
        case COUNT_ALPHABET:
            return { ...state, countAlphabetData: action.countAlphabetAction }
        case COUNT_VOCAB:
            return { ...state, countVocabData: action.countVocabAction }
        case COUNT_GRAMMAR:
            return { ...state, countGrammarData: action.countGrammarAction }
        case COUNT_COMMUNICATION:
            return { ...state, countCommunicationData: action.countCommunicationAction }
        case NEW_USER:
            return { ...state, newUserData: action.newUserAction }
        case NEW_SIGNUP_MEMBER:
            return { ...state, newSignUpMemberData: action.newSignUpMemberAction }
        //user
        case MANAGER_USER:
            return { ...state, managerUserData: action.managerUserAction }
        case EDIT_USER:
            return { ...state, managerUserData: state.managerUserData.map(value => value.user_id === action.editUserAction.user_id ? action.editUserAction : value) }
        case DELETE_USER:
            return { ...state, managerUserData: state.managerUserData.filter(value => value.user_id === action.deleteUserAction) }
        case ACTIVE_MEMBER:
            return { ...state, activeMemberData: action.activeMemberAction }
        case SAVE_ACTIVE_MEMBER:
            return { ...state, activeMemberData: state.activeMemberData.map(value => value.user_id === action.saveActiveMemberAction.user_id ? action.saveActiveMemberAction : value) }
        case REFUSE_ACTIVE_MEMBER:
            return { ...state, managerUserData: state.managerUserData.filter(value => value.signupmember_id === action.deleteUserAction) }
        //alphabet
        case MANAGER_ALPHABET:
            return { ...state, managerAlphabetData: action.managerAlphabetAction }
        case ADD_COURSE_ALPHABET:
            return { ...state, addCourseAlphabetData: action.addCourseAlphabetAction }
        case DELETE_ALPHABET:
            return { ...state, managerAlphabetData: state.managerAlphabetData.filter(value => value.alphabet_id === action.deleteAlphabetAction) }
        //vocab
        case MANAGER_VOCAB:
            return { ...state, managerVocabData: action.managerVocabAction }
        case ADD_COURSE_VOCAB:
            return { ...state, addCourseVocabData: action.addCourseVocabAction }
        case DELETE_VOCAB:
            return { ...state, managerVocabData: state.managerVocabData.filter(value => value.vocab_id === action.deleteVocabAction) }
        //grammar
        case MANAGER_GRAMMAR:
            return { ...state, managerGrammarData: action.managerGrammarAction }
        case ADD_COURSE_GRAMMAR:
            return { ...state, addCourseGrammarData: action.addCourseGrammarAction }
        case DELETE_GRAMMAR:
            return { ...state, managerGrammarData: state.managerGrammarData.filter(value => value.grammar_id === action.deleteGrammarAction) }
        //communication
        case MANAGER_COMMUNICATION:
            return { ...state, managerCommunicationData: action.managerCommunicationAction }
        case ADD_COURSE_COMMMUNICATION:
            return { ...state, addCourseCommunicationData: action.addCourseCommunicationAction }
        case DELETE_COMMUNICATION:
            return { ...state, managerCommunicationData: state.managerCommunicationData.filter(value => value.communication_id === action.deleteCommunicationAction) }
        default:
            return state
    }
}
export default adminReducer;