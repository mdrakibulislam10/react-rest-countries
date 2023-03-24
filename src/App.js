// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
};






































/* const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Visiting every country of the world!!!</h1>
      <p>{countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
};

const Country = props => {
  const { name, population } = props;
  return (
    <div className="">
      <h3>Name: {name}</ h3>
      <p>Population: {population}</p>
    </div>
  )
}; */

export default App;
