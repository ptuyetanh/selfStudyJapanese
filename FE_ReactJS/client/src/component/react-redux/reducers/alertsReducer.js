import { ALERT_SUCCESS_ON, ALERT_SUCCESS_OFF, ALERT_DANGER_OFF, ALERT_DANGER_ON } from "../actions/alertAction"

const alertInitialState = {
    alertSuccessShow: false,
    alertDangerShow: false
}
const alertsReducer = (state = alertInitialState, action) => {
    switch (action.type) {
        case ALERT_SUCCESS_ON:
            return { ...state, alertSuccessShow: true }
        case ALERT_SUCCESS_OFF:
            return { ...state, alertSuccessShow: false }
        case ALERT_DANGER_ON:
            return { ...state, alertDangerShow: true }
        case ALERT_DANGER_OFF:
            return { ...state, alertDangerShow: false }
        default:
            return state
    }
}
export default alertsReducer;