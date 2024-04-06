import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { todoReducer } from "./reducers/todoReducers";


const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>