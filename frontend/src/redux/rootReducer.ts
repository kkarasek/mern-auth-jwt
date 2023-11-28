import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './authSlice'
import { apiSlice } from "./apiSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;