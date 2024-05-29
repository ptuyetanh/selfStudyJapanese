import { combineReducers,createStore,applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import alertsReducer from "./reducers/alertsReducer";
const allReducer = combineReducers({
    signUp: signUpReducer,
    alerts: alertsReducer
 })
var store = createStore(allReducer,applyMiddleware(thunk));
export default store;