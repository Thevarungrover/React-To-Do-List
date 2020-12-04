import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
getStyle = () => {
    return {
        background : '#dfe6e9',
        padding : '10px',
        borderBottom : '1px #636e72 dotted',
        textDecoration: this.props.todo.completed ? 'Line-through' : 'none'
    }
    // if (this.props.todo.completed) {
    //     return {
    //         textDecoration:'Line-through'
    //     }
    // }
    // else{
    //     return {
    //         textDecoration:'none'
    //     }
    // }
}

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                    {' '}
                    {title }
                    { <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >X</button> } 
                </p>
            </div>
        )
    }
}


// proptypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

//  delete button style
const btnStyle = {
    background :'#d63031',
    color : '#fff',
    borderRadius: '50%',
    padding: '5px 6px',
    border: 'none',
    cursor:'pointer',
    float: 'right'
}

export default TodoItem