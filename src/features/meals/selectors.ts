import { RootState } from '../../app/store';
import Meal from './types/Meal';

export const selectMeals = (state: RootState): Meal[] => state.meals.meals;
export const selectError = (state: RootState): string | undefined => state.meals.error;
export const selectFiltered = (state: RootState): Meal[] => state.meals.filtered;
export const selectRecipe = (state: RootState): Meal | null => state.meals.recipe;
export const selectCategory = (state: RootState): string | null => state.meals.selectedCategory;
