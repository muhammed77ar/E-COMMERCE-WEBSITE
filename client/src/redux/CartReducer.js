import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item)=> item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity
      }else{
        state.products = [...state.products, action.payload]
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeItem, resetCart } = CartSlice.actions
export const getAllProducts = (state => state.cart.products)

export default CartSlice.reducer