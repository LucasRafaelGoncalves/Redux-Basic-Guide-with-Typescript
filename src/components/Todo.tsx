import React from 'react'
import { ITodo } from '../reducers'

const Todo: React.FC<Props> = props => (
    <li
        onClick={() => props.onClick(props.id)}
        style={{ textDecoration: props.completed ? 'line-through' : 'none', cursor: 'pointer' }}
    >
        {props.text}
    </li>
)

interface Props extends ITodo {
    onClick: (id: ITodo['id']) => void
}

export default Todo