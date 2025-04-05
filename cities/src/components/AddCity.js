import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddCity = ({ onAddCity }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {name,country,population: Number(population),
    };
    onAddCity(newCity);
    navigate('/cities');
  };
  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Population"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};
export default AddCity;