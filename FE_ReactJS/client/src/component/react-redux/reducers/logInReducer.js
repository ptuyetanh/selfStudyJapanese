import { LOG_IN } from "../actions/logInAction"

const InitialState = {
    login: null,
    isauth:null
}
const logInReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state,isauth: true,login: action.logInAction}
        default:
            return state
    }
}
export default logInReducer;