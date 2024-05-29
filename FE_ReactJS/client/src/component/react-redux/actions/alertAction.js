export const ALERT_ON = 'ALERT_ON';
export const ALERT_OFF = 'ALERT_OFF';
const alertOnSuccess = () => ({
    type: ALERT_ON,
    // AlertOn: alertContent
})
const alertOffSuccess = () => ({
    type: ALERT_OFF,
    // AlertOn: alertContent
})
export const alertOn = () => {
    return (dispatch) => {
        dispatch(alertOnSuccess())
    }
}
export const alertOff = () => {
    return (dispatch) => {
        dispatch(alertOffSuccess())
    }
}