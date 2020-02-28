import React, { Component } from "react"
import "./Weather.css"
class Weather extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1>
              {" "}
              {this.props.city} {this.props.country}{" "}
            </h1>
            <h2>{this.props.icon}</h2>
            <h2>{this.props.temp}</h2>
            <h2>{this.props.humidity}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
