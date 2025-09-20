import React, {  useState } from 'react';

import './Country.css'

const Country = ({country1, handleVisitedCountries}) => {
    const [visited, setVisited] =useState(false);
    const handleVisited =()=>{
        setVisited(visited? false:true );
        handleVisitedCountries(country1.name.common)
        
    }
    // console.log(c)
    return (
        <div  className={`country text-center ${visited ? 'country-visited ':'not Visited'} `}>
            <h2>Name: {country1.name.common}</h2>
            <img src={country1.flags.flags.png} alt="" />
            <p>Population: {country1.population.population} </p>
            <button onClick={handleVisited}>{visited?'Visited': 'Not Visited'}</button>
        </div>
    );
};

export default Country;