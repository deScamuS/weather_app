/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import "./App.css"
import WeatherQuery from "./components/WeatherQuery"
import Weather from "./components/Weather"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      icon: "",
      main: "",
      description: "",
      inputVal: ""
    }
    this.weatherIcon = {
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  handleSearch = () => {
    getWeatherData(this.state.inputVal) //(call getWeatherData function from below)
  }
  componentDidMount() {
    let getWeatherData = inputVal => {
      fetch(
        "https://api.weatherbit.io/v2.0/current?city=Seattle,WA&key=168c5cb818e74abd926a9d65d285d48f"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            city: `${response.name}`,
            main: response.weather[0].main,
            description: response.weather[0].description
          })
          console.log(data)
        })
    }
  }

  //handleChange from WeatherQuery input:
  handleOnChange = e => {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <WeatherQuery
          handleChange={this.state.handleChange}
          handleSearch={this.state.handleSearch}
        />
        <Weather />
      </div>
    )
  }
}
export default App
