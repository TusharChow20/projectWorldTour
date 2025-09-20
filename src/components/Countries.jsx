import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countyPromise}) => {
    const [visitedCountries, setVisitedCountries]= useState([])
    let lst =''
    const handleVisitedCountries = (nameofCountry) =>{
        const newVisitedCountries = [...visitedCountries, nameofCountry]
        setVisitedCountries(newVisitedCountries)
    }
    console.log(lst)
    const country = use(countyPromise)
    const countryData = country.countries
    return (
        <div  >
            <h1>Total Country Visited:{visitedCountries.length} </h1>
            <div className='countries' >
                {
                countryData.map(country1 => <Country country1={country1} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
                

            </div>
        </div>
    );
};

export default Countries;