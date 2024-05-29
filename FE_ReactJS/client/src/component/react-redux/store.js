import { combineReducers,createStore,applyMiddleware } from "redux";
import {thunk} from 'react-redux'
import signUpReducer from './reducers/signUpReducer';
const allReducer = combineReducers({
    signUp: signUpReducer
 })
var store = createStore(allReducer,applyMiddleware(thunk));
export default store;