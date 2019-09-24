import { ITodo } from "./reducers"

export enum ActionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

export interface IAction {
    type: ActionType
    payload: string | number | VisibilityFilter
}

export enum VisibilityFilter {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export const addTodo: (text: ITodo['text']) => IAction = (text: ITodo['text']) => ({
    type: ActionType.ADD_TODO,
    payload: text
})

export const toggleTodo: (index: ITodo['id']) => IAction = (index: ITodo['id']) => ({
    type: ActionType.TOGGLE_TODO,
    payload: index
})

export const setVisibilityFilter: (filter: VisibilityFilter) => IAction = (filter: VisibilityFilter) => ({
    type: ActionType.SET_VISIBILITY_FILTER,
    payload: filter
})