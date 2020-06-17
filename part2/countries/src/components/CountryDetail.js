import React, { useEffect, useState } from 'react'
import service from '../services/service'

const CountryDetail = ({ country, isShown }) => {
    const [ weather, setWeather ] = useState({
        temperature: '',
        wind: '',
        windDir: '',
        imgages: []
    });


    useEffect(() => {
        service.getWeather(country.name).then(res => {
            console.log(res.data.current)
            const { temperature, wind_speed, wind_dir, weather_icons } = res.data.current;
            setWeather({ temperature, wind: wind_speed, windDir: wind_dir, imgages: weather_icons });
        });
    }, [country.name])

    return (
        isShown ? 
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} alt={`${country.name} flag`} style={{ width: '200px' }}></img>
            <h3>Weather in {country.name}</h3>
            <p>Temperature: {weather.temperature} Celcius</p>
            <div>
                {weather.imgages.map(img => 
                    <img src={img} alt="weathericons" key={img}></img>    
                )}
            </div>
            <p>Wind: {weather.wind} mph direction {weather.windDir}</p>
        </div>
        : null
    )
}

export default CountryDetail
