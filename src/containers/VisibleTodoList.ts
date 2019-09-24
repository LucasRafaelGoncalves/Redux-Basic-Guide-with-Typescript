import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilter, IAction } from '../actions'
import TodoList from '../components/TodoList'
import { IAppState, ITodo } from '../reducers'
import { Dispatch } from 'react'

const getVisibleTodos = (todos: IAppState['todos'], filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state: IAppState) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
    onTodoClick: (id: ITodo['id']) => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList