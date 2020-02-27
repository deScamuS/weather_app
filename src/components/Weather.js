import React from "react"

export const Weather = props => {
  return (
    <div className="container">
      
      <div className="Card">
        <h2 className="text-white py-3">{props.city}</h2>
        <h2 className="text-white py-3">{props.country}</h2>
        <h4 className="text-white py-3">{props.temp}</h4>
                <p>{props.description}</p>
             <h5 className="py-4">
          <a href="c03d.png"> {props.weatherIcon}</a>
        </h5>
      </div>
    </div>
  )
}

export default Weather
