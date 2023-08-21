import React from 'react';
import './App.css';
import MealsList from './features/meals/MealsList';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import IngredientSearch from './features/meals/IngredientSearch';
import Home from './components/Home/Home';

function App():JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="meals-categories" element={<MealsList />}/>
        <Route path="/category/:categoryName" element={<MealsList />} />
        <Route path="ingredient-search" element={<IngredientSearch />} />
        </Route>
      </Routes>
  );
}

export default App;
