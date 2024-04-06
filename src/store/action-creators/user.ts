import { Dispatch } from "redux"
import { UserAction, UserActionType } from "../../types/user"
import axios from "axios"




export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USER})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: response.data})
            }, 200)
        } catch (err) {
            dispatch({type: UserActionType.FETCH_USER_ERROR, payload: `${err}`})
        }
    }
}