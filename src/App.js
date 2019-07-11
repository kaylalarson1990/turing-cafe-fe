import React, { Component } from "react";
import "./App.css";
import Reservation from "./Reservation.js";
import Form from "./Form.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    this.getReservations();
  }

  getReservations = () => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(reservations => this.setState({ reservations }))
      .catch(error => this.setState({ error: error.message }));
  };

  addNewRes = newRes => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRes)
    };
    fetch("http://localhost:3001/api/v1/reservations", options)
      .then(response => response.json())
      .then(brandNewRes =>
        this.setState({
          reservations: [...this.state.reservations, brandNewRes]
        })
      )
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form addNewRes={this.addNewRes} />
        <div className="resy-form">
          <Reservation reservations={this.state.reservations} />
        </div>
        <div className="resy-container" />
      </div>
    );
  }
}

export default App;
