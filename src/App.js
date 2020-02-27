/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import "./App.css"
import Weather2 from "./components/Weather2"
import WeatherQuery from "./components/WeatherQuery"
import "./index.css"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    description: undefined,
    error: undefined
  }

  weatherIcon = () => {}

  goGetWeather = async e => {
    e.preventDefault()

    const kelvinToFahrenheit = require("kelvin-to-fahrenheit")
    kelvinToFahrenheit(300)

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    )
    const data = await api_call.json()
    console.log(data)

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        error: ""
      })
    }
  }

  render(props) {
    return (
      <div className="bg">
        <WeatherQuery goGetWeather={this.goGetWeather} />
        <br />
        <br />
        <p></p>
        <Weather2
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          description={this.state.description}
          humidity={this.state.humidity}
          error={this.state.error}
          weatherIcon={this.state.weatherIcon}
        />
        <br />
      </div>
    )
  }
}
export default App
