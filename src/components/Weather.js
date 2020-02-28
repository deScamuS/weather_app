/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { Component } from "react"
import "./Weather.css"
class Weather extends Component {
  render() {
    return (
      <div className="card">
        <div className="front">
          <h2>
            {""}
            {this.props.city}
            {this.props.country}{" "}
          </h2>
          temp <p>{this.props.temp}</p>
          humidity <p>{this.props.humidity}</p>
          windspeed<p> {this.props.wind}</p>
          description <p>{this.props.description}</p>
          <p>{this.props.error} </p>
        </div>
      </div>
    )
  }
}
export default Weather
