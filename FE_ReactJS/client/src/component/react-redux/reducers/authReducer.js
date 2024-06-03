import { IS_AUTH } from "../actions/authAction"

const InitialState = {
    user:null,
    isauth:null,
    loadingWeb:true
}
const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {...state, isauth:true, loadingWeb:false, user: action.isAuthAction}
        default:
            return state
    }
}
export default authReducer;