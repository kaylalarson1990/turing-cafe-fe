import React, { Component } from 'react';
import './Form.css'
import PropTypes from 'prop-types';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    submitRes = (event) => {
        event.preventDefault();
        const newRes = {
            id: Date.now(),
            ...this.state
        }
        this.props.addNewRes(newRes);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: ''
        })
    }

    render() {
        return (
            <form >
                <input 
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type="text"
                    placeholder="Date"
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type="text"
                    placeholder="Time"
                    name='time'
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type="number"
                    placeholder="Number of guests"
                    name='number'
                    value={this.state.number}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.submitRes(event)}>Make Reservation</button>
            </form>

        )
    }
}

Form.propTypes = {
    addNewRes: PropTypes.func.isRequired
  }

export default Form;