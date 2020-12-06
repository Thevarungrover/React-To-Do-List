import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title:' '
    }

    onChange = (e) => {
        this.setState( { title: e.target.value} )
    }
    // to set onchange event for many fields put [e.target.name, e.target.password] in place of title in line 9

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState( { title: ' ' } )
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display : 'flex'}}>
                {/* text field */}
                <input 
                type="text" 
                name="title"
                className="field"
                style={{flex:'10', padding:'5px'}
                } 
                 placeholder="Add Todo..."
                 onChange={this.onChange}
                /> 
                {/* add button */}
                 <input 
                 type="submit" 
                 value="ADD"
                 className="btn"
                 style={{flex: '1'}} 
                 />

            </form>
        )
    }
}

export default AddTodo
