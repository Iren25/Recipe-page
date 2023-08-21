import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFiltered, selectMeals, selectRecipe } from './selectors';
import {
  loadMealsByIngredient,
  loadRecipeByMealId,
} from './mealsSlice';
import styles from './IngredientSearch.module.css';

export default function IngredientSearch(): JSX.Element {
  const meals = useAppSelector(selectMeals);
  const filteredMeals = useAppSelector(selectFiltered);
  const recipe = useAppSelector(selectRecipe);

  const dispatch = useAppDispatch();
  const [ingredient, setIngredient] = useState<string>('');
  const selectedMeal = useAppSelector(selectRecipe);

  const handleSearch = () => {
    dispatch(loadMealsByIngredient(ingredient));
  };

  const handleClear = () => {
    setIngredient('');
  };

  const handleGetRecipe = (mealId: string) => {
    dispatch(loadRecipeByMealId(mealId));
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>Find a meal by ingredient</h1>
   <div className={styles.inputContainer}>
      <input
        className={styles.searchIngredient}
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="search by ingredient"
      />
      <button type="button" onClick={handleSearch} className={styles.btn}>Search</button>
      <button type="button" onClick={handleClear} className={styles.btn}>Clear</button>
   </div>
   { ingredient.length > 0 && filteredMeals.length === 0 ? (
        <p>Sorry, couldn't find any meals</p>
      ) : (
   <ul className={styles.list}>
        {ingredient ? (
            filteredMeals.map((meal) => (
              <li key={meal.idMeal}>
                <h3 className={styles.heading}>{meal.strMeal}</h3>
                <img className={styles.image} src={meal.strMealThumb} alt={meal.strMeal} />
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleGetRecipe(meal.idMeal)}
                >Get Recipe
                </button>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => {
    if (recipe?.strYoutube) {
      window.open(recipe.strYoutube, '_blank');
    }
  }}
                >
  {recipe?.strYoutube ? 'Watch Video' : 'Video not available'}
                </button>
                {selectedMeal?.idMeal === meal.idMeal && (
                    <div>{meal.strMeal}
                    <span className={styles.recipe}>{recipe?.strInstructions}</span>
                    </div>
                    )}
              </li>
            ))
          ) : (
            meals.map((meal) => (
              <li key={meal.idMeal}>
                <h3 className={styles.heading}>{meal.strMeal}</h3>
                <img className={styles.image} src={meal.strMealThumb} alt={meal.strMeal} />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}