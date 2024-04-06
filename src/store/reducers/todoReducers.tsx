import { TodoActionTypes, TodoActions, TodoState } from "../../types/todo"

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: TodoActions): TodoState => {
                switch (action.type) {
                    case TodoActionTypes.FETCH_TODOS: 
                        return {loading: true, error: null, todos: []}
                    case TodoActionTypes.FETCH_TODOS_SUCCESS: 
                        return {loading: false, error: null, todos: action.payload}
                    case TodoActionTypes.FETCH_TODOS_ERROR: 
                        return {loading: false, error: action.payload, todos: []}
                    case TodoActionTypes.FETCH_TODOS_PAGE: 
                        return {loading: false, error: null, todos: [], page: action.payload}
                    default : 
                        return state
                }
}