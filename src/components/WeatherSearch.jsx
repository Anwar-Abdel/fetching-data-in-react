// src/components/WeatherSearch.jsx
import { useState } from 'react';

const WeatherSearch = (props) => {
  const [city, setCity] = useState('');

  console.log('WeatherSearch props:', props);

const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(city); // Don't forget to pass city state!
    setCity('');
  };
  

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
