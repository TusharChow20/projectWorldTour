import React from 'react';

import './Country.css'

const Country = ({country1}) => {
    // console.log(c)
    return (
        <div  className='country'>
            <h2>Name: {country1.name.common}</h2>
            <img src={country1.flags.flags.png} alt="" />
            <p>Population: {country1.population.population} </p>
        </div>
    );
};

export default Country;