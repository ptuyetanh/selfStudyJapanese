export const ALERT_SUCCESS_OFF = 'ALERT_SUCCESS_OFF';
export const ALERT_SUCCESS_ON = 'ALERT_SUCCESS_ON';
export const ALERT_DANGER_ON = 'ALERT_DANGER_ON';
export const ALERT_DANGER_OFF = 'ALERT_DANGER_OFF';
// alert success 
export const alertSOnSuccess = () => ({
    type: ALERT_SUCCESS_ON,
})
export const alertSOffSuccess = () => ({
    type: ALERT_SUCCESS_OFF
})
export const alertSuccessOff = () => {
    return (dispatch) => {
        dispatch(alertSOffSuccess())
    }
}
// alert danger  
export const alertDOnSuccess = () => ({
    type: ALERT_DANGER_ON,
})
export const alertDOffSuccess = () => ({
    type: ALERT_DANGER_OFF
})
export const alertDangerOff = () => {
    return (dispatch) => {
        dispatch(alertDOffSuccess())
    }
}