import Meal from './Meal';

export default interface MealsState {
    category: string | null;
    meals: Meal[]
    error?: string
    filtered: Meal[]
    recipe: Meal | null
    selectedCategory: string | null
}
