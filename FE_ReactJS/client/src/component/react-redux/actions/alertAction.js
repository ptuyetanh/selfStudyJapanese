export const ALERT_SUCCESS_OFF = 'ALERT_SUCCESS_OFF';
export const ALERT_SUCCESS_ON = 'ALERT_SUCCESS_ON';
export const ALERT_DANGER_ON = 'ALERT_DANGER_ON';
export const ALERT_DANGER_OFF = 'ALERT_DANGER_OFF';
export const ALERT_SUCCESS_OFF2 = 'ALERT_SUCCESS_OFF2';
export const ALERT_SUCCESS_ON2= 'ALERT_SUCCESS_ON2';
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
//alert success 2
export const alertOnSuccess2 = () => ({
    type: ALERT_SUCCESS_ON2
})
export const alertOffSuccess2 = () => ({
    type: ALERT_SUCCESS_OFF2
})
export const alertSuccessOff2 = () => {
    return (dispatch) => {
        dispatch(alertOffSuccess2())
    }
}