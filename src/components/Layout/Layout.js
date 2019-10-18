import React from 'react'
import TopMenu from './../TopMenu/TopMenu'

export default function Layou(props) {
    return (
        <div>
            <TopMenu />
            {props.children}
        </div>
    )
}



