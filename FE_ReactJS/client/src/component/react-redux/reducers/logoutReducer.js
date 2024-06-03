import { LOG_OUT } from "../actions/logOutAction";

const InitialState = {
    isNavigateLogOut:null
}
const logOutReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {...state,isNavigateLogOut: true}
        default:
            return state
    }
}
export default logOutReducer;