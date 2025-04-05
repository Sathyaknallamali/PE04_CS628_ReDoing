import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities ? cities.find(city => city.id === parseInt(id)) : null; 

  return (
    <div>
      <h2>City Details</h2>
      {city ? (
        <div>
          <h2>{city.name}</h2>
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
        </div>
      ) : (
        <p>City not found!</p>
      )}
    </div>
  );
};

export default CityDetails;