import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'


const store = configureStore({
    reducer: cartReducer
})

console.log(store.getState())
export default store