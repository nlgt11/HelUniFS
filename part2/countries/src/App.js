import React, { useState, useEffect, Fragment } from 'react';
import CountryName from './components/CountryName';
import service from './services/service';

function App() {
  const [ text, setText ] = useState('');
  const [ countries, setCountries ] = useState([]);
  const [ matchedCountries, setMatchedCountries ] = useState([]);

  const onChangeHandler = event => {
    setMatchedCountries(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())));
    setText(event.target.value);
  }

  useEffect(() => {
    service.getAllCountries()
      .then(res => {
        setCountries(res.data);
      })
  }, [])

  return (
    <Fragment>
      <div>
        Find countries: <input value={text} onChange={onChangeHandler}/>
      </div>
      { 
        matchedCountries.length > 10 
          ? <div>Too many matches, specify another filter</div> 
          : (matchedCountries && matchedCountries.map(country => <CountryName country={country} key={country.numericCode}/>))
      }
    </Fragment>
  )
}

export default App;
