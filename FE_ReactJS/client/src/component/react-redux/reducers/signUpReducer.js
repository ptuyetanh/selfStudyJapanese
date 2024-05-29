const InitialState = {
    signup: null
}
const signUpReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}
export default signUpReducer;