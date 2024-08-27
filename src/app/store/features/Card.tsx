import { Cart } from '@/app/utils/Type'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Addtocart(state,action){
      let uuid = Math.floor(1000+Math.random()*9000);
      let newObj = {...action.payload,uuid};
      state.push(newObj)
    },
    // delete
    delItem(state,{payload}){
      return state.filter((val)=>val.uunid!==payload )
    },
    AddCart(state,action){
      let obj = state.find((val)=>val.id == action.payload.id && val.color == action.payload.color && val.size == action.payload.size);
      if (obj) {
        ++obj.qty;
        let newstate:any =  state.filter((val)=>val.id !== obj?.id)
        state = [...newstate,obj]
        return
      }
    },
    subtractcart(state,action){
      let obj = state.find((val)=>val.id == action.payload.id && val.color == action.payload.color && val.size == action.payload.size);
      if (obj!==undefined) {      
      if (obj?.qty<=1) {
        return state.filter((val)=>val.uunid!==obj?.uunid)
      }
      --obj.qty;
      let newstate = state.filter((val)=>val.uunid===obj?.uunid)
      state=[...newstate,obj];
      return
  }
}
  }
})

export const {Addtocart,delItem , AddCart ,subtractcart} = cartSlice.actions

export default cartSlice.reducer