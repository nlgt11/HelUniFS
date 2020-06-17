import React, { useState } from 'react'
import CountryDetail from './CountryDetail';

const CountryName = ({ country }) => {
    const [ isShown, setIsShown ] = useState(false);
    const toggleIsShown = () => {setIsShown(!isShown)};
    
    return (
        <div>
            {country.name} 
            <button onClick={toggleIsShown}>{isShown ? 'Hide' : 'Show'}</button>
            {isShown ? <CountryDetail country={country} isShown={isShown}></CountryDetail> : null}
        </div>    
    )
}

export default CountryName
