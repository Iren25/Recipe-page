import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFiltered, selectMeals, selectRecipe } from './selectors';
import styles from './MealsList.module.css';
import { loadMeals, loadMealsByCategory, loadRecipeByMealId } from './mealsSlice';

export default function MealsList(): JSX.Element {
  const { categoryName } = useParams(); 
  const meals = useAppSelector(selectMeals);
  const dispatch = useAppDispatch();
  const filteredMeals = useAppSelector(selectFiltered);
  const recipe = useAppSelector(selectRecipe);
  const selectedMeal = useAppSelector(selectRecipe);

  const handleCategoryClick = (category: string): void => {
    dispatch(loadMealsByCategory(category));
};

  const handleGetRecipe = (mealId: string) => {
  dispatch(loadRecipeByMealId(mealId));
};

  useEffect(() => {
    if (categoryName) {
    dispatch(loadMeals());
  } else { dispatch(loadMeals());
  }
  }, [dispatch, categoryName]);

  const handleBackToAllCategories = () => {
    dispatch(loadMeals());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Meals List</h1>
      {categoryName ? (
        <Link to="/meals-categories" className={styles.categoryLink}>Back to all categories</Link>
      ) : (
        <div className={styles.categoryLinks}>
      {meals &&
        meals.map((meal, index) => (
          <Link
            key={`${meal.strCategory} - ${index}`}
            to={`/category/${meal.strCategory}`}
            className={styles.categoryLink}
            onClick={() => {handleCategoryClick(meal.strCategory);
            handleBackToAllCategories();
            }}
          >
            {meal.strCategory}
          </Link>
        ))}
    </div>
  )}
  <ul className={styles.list}>
        {filteredMeals.map((meal) => (
          <li key={meal.idMeal}>
            <h2 className={styles.heading}>{meal.strMeal}</h2>
            <img className={styles.mealsImage} src={meal.strMealThumb} alt={meal.strMeal} />
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
        ))}
      </ul>
    </div>
  );
}





