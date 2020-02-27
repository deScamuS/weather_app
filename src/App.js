/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import "./App.css"
import Weather from "./components/Weather"
import WeatherQuery from "./components/WeatherQuery"
import "./index.css"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  }

  goGetWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8004ed6a9e53c30dd054d079fff7f24e&units=metric`
    )
    const data = await api_call.json()
    console.log(data)

    if (city && country) {
      this.setState({
        city: data.city,
       country: data.sys.country,
        name: data.name,
       temperature: data.main.temperature,
        humidity: data.main.humidity,
        description: data.weather[0].description,
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
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          error={this.state.error}
        />
        <br />
      </div>
    )
  }
}
export default App
