/* eslint-disable no-undef */
import React, { Component } from "react"

export default class WeatherQuery extends Component {
  state = {
    inputVal: ""
  }
  render(props) {
    return (
      <div>
        <h1>WeatherApp</h1>
        <input
          onChange={event =>this.props.handlChange(event)}
          name="text"
          type="text"
          placeholder=""
          value={this.state.inputVal}
        />
        <button onClick={this.props.handleSearch}>Search</button>
      </div>
    )
  }
}
