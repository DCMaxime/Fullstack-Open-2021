import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import anecdoteReducer, {initializeAnecdotes} from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store