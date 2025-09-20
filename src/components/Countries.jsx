import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countyPromise}) => {
    const country = use(countyPromise)
    const countryData = country.countries
    console.log(countryData)
    return (
        <div  >
            <h1>{countryData.length}</h1>
            <div className='countries' >
                {
                countryData.map(country1 => <Country country1={country1}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;