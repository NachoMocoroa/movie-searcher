import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/moviesReducer";
import searchReducer from "./reducers/searchReducer";
import listReducer from "./reducers/listReducer";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    searches: searchReducer,
    moviesList: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
