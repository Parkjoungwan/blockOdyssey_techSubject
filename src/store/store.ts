import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        pagination: paginationSlice,
        search: searchSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch