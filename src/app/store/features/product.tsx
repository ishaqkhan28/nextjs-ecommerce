import { createSlice } from '@reduxjs/toolkit'
import Products from '@/app/utils/Mock'
import { Product } from '@/app/utils/Type'

// Define the initial state using that type
const initialState: Product[] = Products

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const {  } = productSlice.actions

export default productSlice.reducer