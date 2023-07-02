import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../theme/theme"

export const store =  configureStore({ 
    reducer: { 
        theme: themeSlice.reducer,
    }
})


// https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

