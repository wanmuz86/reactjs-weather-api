"use client"
import Search from "./components/search"
import Weather from "./components/weather"
import axios from "axios"
import { useState } from "react";
 
export default function Home() {

  const [weatherData, setWeatherData] = useState(null);
  const getWeather = (city:string) => {
    console.log(`${city} from page`)
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then(response => {
      console.log(response.data);
      setWeatherData(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


  }
  return (
    <main>
      <Search loadWeather={getWeather}/>
      <Weather weatherData={weatherData}/>
     
    </main>
  )
}
