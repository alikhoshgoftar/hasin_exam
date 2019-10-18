import React from 'react'
import TopMenu from '../TopMenu'

export default function Layou(props) {
    return (
        <div>
            <TopMenu />
            {props.children}
        </div>
    )
}