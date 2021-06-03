import React, { Component } from 'react'

class OldState extends Component {
    // this will give you inside a class the functionality of React Component
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 0
        }
    }

addOne = () => {
    this.setState({
        count: this.state.count + 1
    })
}

addTwo() {
    this.setState({
        count2: this.state.count2 + 2
    })
    
}


render() {
    return (
        <>
    <p>Hi I'm the OldState component with arrow {this.state.count}</p>
    <p>Hi I'm the OldState component old function {this.state.count2}</p>

    <button onClick={this.addOne}>Add one to state</button>
    <button onClick={() => this.addTwo()}>Add one to state</button>

    </>
    )

}

}


export default OldState;