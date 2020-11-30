import React from 'react'
import logo from '../image/memories.png';

export default function Header() {
    return (
        <>
        <header>
            <h1>Memories</h1>
            <img src={logo} alt="logo"/>
        </header>
        </>
    )
}
