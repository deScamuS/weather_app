import React from "react"

export const Weather = props => {
  return (
    <div className="container">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
      </div>
    </div>
  )
}

export default Weather
