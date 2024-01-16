"use client"
import React,{ChangeEvent, useState} from 'react'
// Prop type that is going to be returned by this component to page.tsx
// Will return a callback function (void)
// that will have name of type String as argument
// And the name of the prop  us loadWeather
interface SearchProps {
    loadWeather: (
        name:string
    ) => void;
}
// Changing to typescript function declaration
const Search:React.FC<SearchProps> = ({loadWeather}) => {
    const [city, setCity] = useState('')
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }
    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(city);
        loadWeather(city)

    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder='Enter city name' value={city}
        onChange={handleChange}/>
        <button type='submit'>Search</button>
        </form>
        </div>
  )
}
export default Search;
