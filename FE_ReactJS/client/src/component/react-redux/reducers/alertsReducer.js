import { ALERT_OFF, ALERT_ON } from "../actions/alertAction"

const alertInitialState = {
    alertshow: false 
}
const alertsReducer = (state = alertInitialState, action) => {
    switch (action.type) {
        case ALERT_ON:
            return {...state,alertshow: true}
        case ALERT_OFF:
            return {...state,alertshow: false}
        default:
            return state
    }
}
export default alertsReducer;