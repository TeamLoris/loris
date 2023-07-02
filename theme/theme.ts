import { createSlice } from '@reduxjs/toolkit'
import { colors } from './colors'

export const themeSlice = createSlice({ 
    name: "theme",
    initialState: { 
        theme: "dark",
        colors: colors.dark
    }, 
    reducers: { 
        toggleTheme: (state) => { 
            if(state.theme === "dark"){ 
                state.theme = "light"
                state.colors = colors.light
            } else { 
                state.theme = "dark"
                state.colors = colors.dark
            }
            console.log(state.colors)
        }
    }
})