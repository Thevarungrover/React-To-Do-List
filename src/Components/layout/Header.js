import React from 'react'

 function Header() {
    return (
       <header style={headerStyle}>
           <h1>ToDo List</h1>
       </header>
    )
}

const headerStyle = {
    background : '#2d3436',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header