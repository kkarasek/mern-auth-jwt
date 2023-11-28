import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { rootReducer, RootState } from "./rootReducer";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;