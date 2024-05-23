import { createSlice } from "@reduxjs/toolkit";

type Items={
    id: number,
    img: string,
    name: string,
    price: string,
    quantity: number,
    totalAmount: number,
}

type InitialState ={
    data: Items[],
    totalItems: number,
    totalAmount: number,
    deliveryCharge: number,
};

const initialState:InitialState = {
    data: [],
    totalItems: 0,
    totalAmount: 0,
    deliveryCharge: 10,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingProduct = state.data.find(product => product.id === action.payload.id)

            if (existingProduct){
                const tempCart = state.data.map(item => {
                    if(item.id === action.payload.id){
                        const NewQty = item.quantity + action.payload.quantity
                        const newTotal = NewQty * Number(item.price)
                        return(
                            {...item, quantity: NewQty, totalAmount: newTotal}
                        )
                    }else{
                        return item
                    }
                }) 
                state.data = tempCart
            }else{
                state.data.push(action.payload)
            }
            console.log(existingProduct)
            console.log(action.payload)
        },

        reduceFromCart: (state, action) => {
            console.log(action)
            const currentProduct = state.data.find(item => item.id === action.payload.id)

            if(currentProduct){
                const decreaseItem = state.data.map(product => {
                    if(product.id === action.payload.id){
                        const newQuantity = product.quantity - 1
                        // if( product.quantity === 0){
                        //     state.data = state.data.filter(newItem => newItem.id !== action.payload.id)
                        // }
                        const newTotalAmount = Number(product.price) * newQuantity
                        return(
                            {...product, quantity: newQuantity, totalAmount: newTotalAmount}
                        )
                    }else{
                        return product
                    }
                }) 
                state.data = decreaseItem
            }
        },

        increaseFromCart: (state, action) => {
            console.log(action)
            const currentProduct = state.data.find(item => item.id === action.payload.id)

            if(currentProduct){
                const increaseItem = state.data.map(product => {
                    if(product.id === action.payload.id){
                        const newQuantity = product.quantity + 1
                        const newTotalAmount = Number(product.price) * newQuantity
                        return(
                            {...product, quantity: newQuantity, totalAmount: newTotalAmount}
                        )
                    }else{
                        return product
                    }
                }) 
                state.data = increaseItem
            }
        },

        deleteFromCart: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addToCart, reduceFromCart, increaseFromCart, deleteFromCart } = CartSlice.actions
export default CartSlice.reducer