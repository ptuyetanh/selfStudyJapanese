import { LEVEL } from "../actions/levelAction"

const InitialState = {
    seeLevel:null
}
const levelReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LEVEL:
            return {...state,seeLevel: action.levelAction}
        default:
            return state
    }
}
export default levelReducer;