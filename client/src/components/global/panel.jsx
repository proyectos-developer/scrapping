import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GlogalPanel({proporcional}) {
        
    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <Outlet/>
        </div>
    )
}
