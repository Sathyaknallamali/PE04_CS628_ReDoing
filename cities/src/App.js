
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
const App = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'Kandukuru', country: 'India', population: 8419600 },
    { id: 2, name: 'Hyderabad', country: 'India', population: 13929286 },
  ]);

  const addCity = (newCity) => {
    const newCityWithId = { ...newCity, id: cities.length + 1 }; 
    setCities([...cities, newCityWithId]);
  };
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/cities/add" element={<AddCity onAddCity={addCity} />} />
          <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;