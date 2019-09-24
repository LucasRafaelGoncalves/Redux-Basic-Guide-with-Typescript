import { VisibilityFilter, IAction } from './actions'
import { combineReducers } from 'redux'
import { Reducer } from 'react'

const todos: (state: ITodo[], action: IAction) => ITodo[] = (state: ITodo[] = [], action: IAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload as string,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.reduce((acc: ITodo[], cur) => {
                if (cur.id === action.payload)
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

const visibilityFilter: (state: VisibilityFilter, action: IAction) => VisibilityFilter =
    (state: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: IAction) => {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                return action.payload as VisibilityFilter
            default:
                return state
        }
    }

export interface IAppState {
    visibilityFilter: VisibilityFilter
    todos: ITodo[]
}

export interface ITodo {
    id: number
    text: string
    completed: boolean
}

const todoApp = combineReducers<Reducer<IAppState, IAction>>({
    visibilityFilter,
    todos
})

export default todoApp