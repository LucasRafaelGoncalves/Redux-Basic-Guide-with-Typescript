import React from 'react'
import Todo from './Todo'
import { ITodo } from '../reducers'

const TodoList: React.FC<Props> = props => (
    <ul>
        {props.todos.map(todo => <Todo key={todo.id} {...todo} onClick={props.onTodoClick} />)}
    </ul>
)

interface Props {
    onTodoClick: (id: ITodo['id']) => void
    todos: ITodo[]
}

export default TodoList