import { combineReducers,createStore,applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import alertsReducer from "./reducers/alertsReducer";
import logInReducer from "./reducers/logInReducer";
import authReducer from "./reducers/authReducer";
import logOutReducer from "./reducers/logoutReducer";
import levelReducer from "./reducers/levelReducer";
import lessonReducer from "./reducers/lessonReducer";
import studyReducer from "./reducers/studyReducer";
import signUpMemberReducer from "./reducers/signUpMemberReducer";
import reviewReducer from "./reducers/reviewReducer";
import adminReducer from "./reducers/adminReducer";

const allReducer = combineReducers({
    signUp: signUpReducer,
    alerts: alertsReducer,
    logIn: logInReducer,
    auth:authReducer,
    logOut:logOutReducer,
    level:levelReducer,
    lesson:lessonReducer,
    study:studyReducer,
    signUpMember:signUpMemberReducer,
    review:reviewReducer,
    admin:adminReducer
 })
var store = createStore(allReducer,applyMiddleware(thunk));
export default store;