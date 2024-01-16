import React from 'react'

interface WeatherProp {
    weatherData: any
}

const Weather:React.FC<WeatherProp> = ({weatherData}) => {
  return (
   <div>
    {
        // the bracket here is needed because i m doing conditional rendering on a return
        weatherData != null ? (
<>
    <h2>Weather for {weatherData.name}</h2>
    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}</p>
</>
        )
        :
         // the bracket here is needed because i m doing conditional rendering on a return
        (
        <>
        <p>No data available</p>
        </>
        )
    }
   </div>
  );
}

export default Weather
