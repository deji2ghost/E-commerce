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

const storeLocalStorage = (data: Items[]) => {
  localStorage.setItem('cartItems', JSON.stringify(data))
}

const storeLocalStorage1 = (totalAmount: Number) => {
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
}

const storeLocalStorage2 = (totalItems: Number) => {
  localStorage.setItem('totalItems', JSON.stringify(totalItems))
}

const dataItems = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const dataTotalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const dataTotalItems = localStorage.getItem('totalItems') !== null ? JSON.parse(localStorage.getItem('totalItems')) : 0

const initialState:InitialState = {
    data: dataItems,
    totalItems: dataTotalItems,
    totalAmount: dataTotalAmount,
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
                storeLocalStorage(state.data)
            }else{
                state.data.push(action.payload)
                storeLocalStorage(state.data)
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
                state.data = decreaseItem,
                storeLocalStorage(state.data)
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
                storeLocalStorage(state.data)
            }
        },

        deleteFromCart: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
            storeLocalStorage(state.data)
        },

        totalItemsCart: (state) => {
            const totalItems = state.data.reduce((acc, item) => {
                return (acc += item.quantity)
            }, 0);
            state.totalItems = totalItems
            storeLocalStorage2(state.totalItems)
            const totalAmount = state.data.reduce((acc, item) => {
                return (acc += item.totalAmount)
            }, 0);
            state.totalAmount = totalAmount
            storeLocalStorage1(state.totalAmount)
        }
    }
})

export const { addToCart, reduceFromCart, increaseFromCart, deleteFromCart, totalItemsCart } = CartSlice.actions
export default CartSlice.reducer