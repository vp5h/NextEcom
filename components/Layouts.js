import React from 'react'
import NavBar from './NavBar'

export default function Layouts({children}) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}
