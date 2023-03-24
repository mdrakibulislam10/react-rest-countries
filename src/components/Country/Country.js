import React from 'react';
// css
import "./Country.css";

// child / similar look different data component;
const Country = props => {
    // console.log(props.country); // name, area, population, region
    const { name, area, population, region, flags } = props.country;
    return (
        <div className="country bg-success">
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;