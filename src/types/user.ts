
export const enum UserActionType {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

interface UserFetchAction {
    type: UserActionType.FETCH_USER,
}

interface UserFetchSuccessAction {
    type: UserActionType.FETCH_USER_SUCCESS,
    payload: any[]
}

interface UserFetchErrorAction {
    type: UserActionType.FETCH_USER_ERROR,
    payload: string
}

export type UserAction = UserFetchAction | UserFetchSuccessAction | UserFetchErrorAction

export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}