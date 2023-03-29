import React, { Component } from 'react'

export default class employee extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name,
            phone: props.phone,
            salary: props.salary,
            click: 0,
        }
    }
    changeState() {
        this.setState({
            click: this.state.click + 1,
            name: `Khushal ${this.state.click}`,
            phone: '7017769048',
            salary: '150000',
        })
    }
    render() {
        const {name, phone, salary} = this.state
        return (
      <div className='text-center mt-5'>
            <h1 className='text-3xl mb-5 font-bold'>Employee</h1>
            <h2 className='text-2xl'>Name: {name}</h2>
            <h2 className='text-2xl'>Phone: {phone}</h2>
            <h2 className='text-2xl'>Salary: {salary}</h2>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5' onClick={() => { this.changeState()}}>Click Me</button>
      </div>
    )
  }
}
