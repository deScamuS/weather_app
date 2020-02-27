/* eslint-disable no-undef */
import React, { Component } from "react"

export default class WeatherQuery extends Component {
  render(props) {
    return (
      <div className="container">
        <h1>WeatherApp</h1>
        <form onSubmit={this.props.goGetWeather}>
          <input
            className="city-input"
            name="city"
            type="text"
            placeholder="City"
          />
          <hr/>
          <br />
          <input
            className="country-input"
            name="country"
            type="text"
            placeholder="Country"
          />
          <hr/>
          <br />
          <button className="btn btn-info">Get Weather </button>
          <hr/>
        </form>
      </div>
    )
  }
}
