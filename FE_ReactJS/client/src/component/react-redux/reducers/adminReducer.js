import { COUNT_ALPHABET, COUNT_COMMUNICATION, COUNT_GRAMMAR, COUNT_MEMBER, COUNT_USER, COUNT_VOCAB, MANAGER_USER, NEW_SIGNUP_MEMBER, NEW_USER } from "../actions/adminAction"

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

}
const  adminReducer= (state = InitialState, action) => {
    switch (action.type) {
        case COUNT_USER:
            return {...state, countUserData: action.countUserAction}
        case COUNT_MEMBER:
            return {...state, countMemberData: action.countMemberAction}
        case COUNT_ALPHABET:
            return {...state, countAlphabetData: action.countAlphabetAction}
        case COUNT_VOCAB:
            return {...state, countVocabData: action.countVocabAction}
        case COUNT_GRAMMAR:
            return {...state, countGrammarData: action.countGrammarAction}
        case COUNT_COMMUNICATION:
            return {...state, countCommunicationData: action.countCommunicationAction}
        case NEW_USER:
            return {...state, newUserData: action.newUserAction}
        case NEW_SIGNUP_MEMBER:
            return {...state, newSignUpMemberData: action.newSignUpMemberAction}
        case MANAGER_USER:
            return {...state, managerUserData: action.managerUserAction}
        default:
            return state
    }
}
export default adminReducer;