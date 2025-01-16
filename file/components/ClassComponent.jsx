import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h3>ClassComponent</h3>
                <p>Hi! {this.props.name}</p>
            </div>
        )
    }
}

export default ClassComponent