import React from 'react'

const Link: React.FC<Props> = props => (

    props.active ?
        <span>{props.children}</span> :
        <a
            href="./"
            onClick={e => {
                e.preventDefault()
                props.onClick()
            }}
        >
            {props.children}
        </a>

)

interface Props {
    active: boolean
    onClick: () => void
}

export default Link