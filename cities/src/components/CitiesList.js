
import React from 'react';
import { Link } from 'react-router-dom';

const CitiesList = ({ cities }) => {

  return (
    <div>
      <h2>Cities List</h2>
      <Link to="/cities/add">Add New City</Link>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;