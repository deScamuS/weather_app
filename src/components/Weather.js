import React, { Component } from "react"
import "./Weather.css"
class Weather extends Component {
  render() {
    return (
      <div className="card">
        <div className="front">
          <h2>
            {this.props.city}
            {this.props.country}{" "}
          </h2>
          Temp <p>{this.props.temp}</p>
          Humidity <p>{this.props.humidity}</p>
          Description <p> {this.props.description}</p>
          Wind <p> {this.props.wind}</p>
          <p>{this.props.error} </p>
        </div>
      </div>
    )
  }
}

export default Weather
