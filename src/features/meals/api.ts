import Meal from './types/Meal';

// eslint-disable-next-line import/prefer-default-export
export async function getAllCategories(): Promise<{ meals: Meal[] }> {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    return res.json();
}
export async function getMealsByIngredient(ingredient: string): Promise<{ meals: Meal[] }> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    return res.json();
}
export async function getRecipeByMealId(mealId: string): Promise<{ meals: Meal[] }> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    return res.json();
}
export async function getMealsByCategory(selectedCategory: string): Promise<{ meals: Meal[] }> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
    return res.json();
}
