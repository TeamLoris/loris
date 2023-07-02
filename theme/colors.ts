

const DRACULA = "#2d3436"
const AMERICANGREY = "#636e72"
const OFFWHITE = "#eeeeee"
const LIGHTGREY = "#dfe6e9"
const MINT = "#00b894"
const SUCCESS = "#2ecc71"
const ERROR = "#d63031"


const common = { 
    primary: MINT,
    success: SUCCESS, 
    error: ERROR
} 

const light = { 
    ...common, 
    background: LIGHTGREY,
    text: DRACULA, 
    secondaryText: AMERICANGREY,
}

const dark = { 
    ...common, 
    background: DRACULA, 
    text: OFFWHITE,
    secondaryText: LIGHTGREY
}


export const colors = { dark, light }



