import { VisibilityFilter, ActionType } from './actions'
import { combineReducers } from 'redux'
import { Reducer } from 'react'

const initialState: IAppState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
}

const todos: (state: ITodo[], action: IAction) => ITodo[] = (state: ITodo[] = [], action: IAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.payload,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.reduce((acc: ITodo[], cur, index) => {
                if (index === action.payload)
                    cur.completed = !cur.completed
                return [
                    ...acc,
                    cur
                ]
            }, [])
        default:
            return state
    }
}

const visibilityFilter: (state: keyof typeof VisibilityFilter, action: IAction) => keyof typeof VisibilityFilter =
    (state: keyof typeof VisibilityFilter = "SHOW_ALL", action: IAction) => {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                return action.payload
            default:
                return state
        }
    }

const todoApp: (state: IAppState, action: IAction) => IAppState = (state: IAppState = initialState, action: IAction) => ({
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
})

interface IAppState {
    visibilityFilter: keyof typeof VisibilityFilter
    todos: ITodo[]
}

interface ITodo {
    text: string
    completed: boolean
}

interface IAction {
    type: keyof typeof ActionType
    payload: any
}