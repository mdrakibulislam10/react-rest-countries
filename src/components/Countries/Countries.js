import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
// css
import "./Countries.css";

// parent / container component;
const Countries = () => {
    const [countries, secCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => secCountries(data))
    }, []);

    return (
        <div>
            <h2>Hello from countries!!! {countries.length}</h2>
            {
                // countries.map(country => console.log(country))
            }

            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country} // key = {value}
                        key={country.cca3}
                    ></Country>)
                }
            </div>

            {/* {
                countries.map(country => <Country
                // name={country.name.common}
                // population={country.population}
                // area={country.area}
                // region={country.region}
                // key={country}
                ></Country>)
            } */}
        </div>
    );
};

export default Countries;