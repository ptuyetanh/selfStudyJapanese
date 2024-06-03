import { combineReducers,createStore,applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import alertsReducer from "./reducers/alertsReducer";
import logInReducer from "./reducers/logInReducer";
import authReducer from "./reducers/authReducer";
import logOutReducer from "./reducers/logoutReducer";

const allReducer = combineReducers({
    signUp: signUpReducer,
    alerts: alertsReducer,
    logIn: logInReducer,
    auth:authReducer,
    logOut:logOutReducer
 })
var store = createStore(allReducer,applyMiddleware(thunk));
export default store;