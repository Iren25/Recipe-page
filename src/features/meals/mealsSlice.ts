import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MealsState from './types/MealsState';
import * as api from './api';

const initialState: MealsState = {
    meals: [],
    filtered: [],
    recipe: null,
    selectedCategory: null,
    category: null
};

 export const loadMeals = createAsyncThunk(
    'meals/loadMeals',
    () => api.getAllCategories()
);

export const loadMealsByIngredient = createAsyncThunk(
'meals/loadMealsByIngredient',
(ingredient: string) => api.getMealsByIngredient(ingredient)
);

export const loadRecipeByMealId = createAsyncThunk(
    'meals/loadRecipeByMealId',
    (mealId: string) => api.getRecipeByMealId(mealId)
);

export const loadMealsByCategory = createAsyncThunk(
    'meals/loadMealsByCategory',
    (selectedCategory: string) => api.getMealsByCategory(selectedCategory)
);

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadMeals.fulfilled, (state, action) => {
        state.meals = action.payload.meals;
        })
        .addCase(loadMeals.rejected, (state) => {
            state.error = 'Ошибка получения данных';
        })
        .addCase(loadMealsByIngredient.fulfilled, (state, action) => {
            state.filtered = action.payload.meals;
        })
        .addCase(loadRecipeByMealId.fulfilled, (state, action) => {
            state.recipe = action.payload.meals[0] || null;
        })
        .addCase(loadMealsByCategory.fulfilled, (state, action) => {
            state.filtered = action.payload.meals;
            state.selectedCategory = action.meta.arg;
            console.log("slice")
        });
    },
});

export default mealsSlice.reducer;
