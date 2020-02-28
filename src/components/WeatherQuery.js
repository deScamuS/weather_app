/* eslint-disable no-undef */
import React, { Component } from "react"
import { MDBInput } from "mdbreact"

export default class WeatherQuery extends Component {
  render(props) {
    return (
      <div className="container">
        <h1> weather </h1>
        <form onSubmit={this.props.goGetWeather}>
          <MDBInput
            label="City"
            className="city-input"
            name="city"
            type="text"
          />

          <MDBInput
            label="Country"
            className="country-input"
            name="country"
            type="text"
          />
          <br />
          <br />
          <button onClick={this.props.clearFields} className="btn btn-mdb">
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}
