import { configureStore } from '@reduxjs/toolkit'
import keranjangReducer from './keranjangSlice'

export const store = configureStore({
    reducer: {
        keranjang: keranjangReducer,
    },
})
