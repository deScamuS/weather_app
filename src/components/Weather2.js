import React, { Component } from "react"
import "./Weather2.css"
class Weather2 extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1>
              {" "}
              {this.props.city} {this.props.country}{" "}
            </h1>
            <h2>{this.props.temp}</h2>
            <p>{this.props.description}</p>
          </div>

          <br />
          <div className="flip-card-back">
            <p>{this.props.temp}</p>

            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather2
