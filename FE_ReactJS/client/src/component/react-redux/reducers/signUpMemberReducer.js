import { SIGN_UP_MEMBER } from "../actions/signUpMemberAction";


const InitialState = {
    signUpMemberData: null
}
const signUpMemberReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SIGN_UP_MEMBER:
            return {...state,signUpMemberData: action.signUpMemberAction}
        default:
            return state
    }
}
export default signUpMemberReducer;