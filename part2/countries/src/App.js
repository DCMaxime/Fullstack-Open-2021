import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState([])
    const [countryNameFilter, setCountryNameFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleChangeOnCountryNameFilter = (event) => {
        const nameFilter = event.target.value
        setCountryNameFilter(nameFilter)
        if(nameFilter.length > 0)
            setCountriesToShow(countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase())))
        else
            setCountriesToShow([])
    }

    return (
        <div>
            Find countries : <input value={countryNameFilter} onChange={handleChangeOnCountryNameFilter}/>
            <Display countries={countriesToShow}/>
        </div>
    );
}

const Display = ({countries}) => {
    if(countries.length < 1)
        return <></>
    else if(countries.length === 1)
        return <Country country={countries[0]}/>
    else if(countries.length <= 10)
        return <Countries countries={countries}/>
    else if (countries.length > 10)
        return <p>Too many matches, specify another filter.</p>
}

const Countries = ({countries}) => {
    return (
        <ul>
            {countries.map(country => <li key={country.name}>{country.name}</li>)}
        </ul>
    )
}

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital : {country.capital}</p>
            <p>Population : {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag}  alt="Country flag" style={{'maxWidth':'100px'}} />
        </div>
    )
}

export default App;
