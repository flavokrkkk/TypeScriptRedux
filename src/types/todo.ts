
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    FETCH_TODOS_PAGE = 'FETCH_TODOS_PAGE',
}

interface TodoFetchAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface TodoFetchSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
}

interface TodoFetchErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
}

interface TodoFetchPageAction {
    type: TodoActionTypes.FETCH_TODOS_PAGE
}

export type TodoActions = TodoFetchAction | TodoFetchSuccessAction | TodoFetchErrorAction | TodoFetchPageAction
 
export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page?: number,
    limit?: number
}
