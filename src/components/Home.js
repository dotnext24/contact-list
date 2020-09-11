import React, { Component } from 'react'
import todos from './a.json'
export default class Home extends Component {
    
    
    render() {
        return (
            <div>
                <h1>Home {todos.length}</h1>
            </div>
        )
    }
}
