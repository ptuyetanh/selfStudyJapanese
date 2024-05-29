import { SIGN_UP } from "../actions/signUpAction";

const InitialState = {
    signup: null
}
const signUpReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {...state,signup: action.signUp}
        default:
            return state
    }
}
export default signUpReducer;