/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import "./App.css"
import Weather from "./components/Weather"
import WeatherQuery from "./components/WeatherQuery"
import "./index.css"

const API_KEY = "8004ed6a9e53c30dd054d079fff7f24e"
class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    description: undefined,
    error: undefined,
    wind: undefined
  }

  weatherIcon = () => {}

  goGetWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    )
    const data = await api_call.json()
    console.log(data)

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      })
    }
  }
  render(props) {
    return (
      <div className="bg">
        <WeatherQuery
          goGetWeather={this.goGetWeather}
          clearFields={this.clearFields}
        />
        <br />
        <br />
        <p>
          <a href="https://github.com/deScamuS/weather_app" alt="">
            <i class="fab fa-github"></i>
          </a>
        </p>

        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          description={this.state.description}
          humidity={this.state.humidity}
          error={this.state.error}
          wind={this.state.wind}
        />
      </div>
    )
  }
}
export default App
