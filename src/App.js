/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import WeatherQuery from "./components/WeatherQuery"
const API_KEY = "168c5cb818e74abd926a9d65d285d48f"

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: ""
    }
  }
  componentDidMount() {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=Seattle,WA&key=168c5cb818e74abd926a9d65d285d48f"
    )
      .then(res => res.json())
      .then(data => this.setState({ response: data }))
  }

  render() {
    return (
      <div className="container">
        <WeatherQuery />
      </div>
    )
  }
}
export default App
