import { Dispatch } from "redux"
import axios from "axios"
import { TodoActionTypes, TodoActions } from "../../types/todo"




export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 200)
        } catch (err) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: `${err}`})
        }
    }
}