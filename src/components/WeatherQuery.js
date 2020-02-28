/* eslint-disable no-undef */
import React, { Component } from "react"
import { MDBInput } from "mdbreact"

export default class WeatherQuery extends Component {
  render(props) {
    return (
      <div className="container">
        <h1> WeatherApp</h1>
        <form onSubmit={this.props.goGetWeather}>
          <MDBInput
            label="City"
            className="city-input"
            name="city"
            type="text"
            placeholder="City"
          />

          <MDBInput
            label="Country"
            className="country-input"
            name="country"
            type="text"
            placeholder="Country"
          />
          <br />
          <br />
          <button onClick={this.props.displayWeather} className="btn btn-mdb">
            Get Weather
          </button>
          <br />
        </form>
      </div>
    )
  }
}
