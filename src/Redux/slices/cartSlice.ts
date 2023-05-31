import { ProductType } from "../../types/product"
import { createSlice} from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


type CartType={
    productsCart:ProductType[],
    totalCart:number
}

export const Cart=createSlice({
    name:'cart',
    initialState:{
        productsCart:[] as ProductType[],
        totalCart:0
    },
    reducers:{
        addProductCart:(state,action:PayloadAction<ProductType>)=>{
           state.productsCart.unshift(action.payload)
           state.totalCart+=action.payload.price
        },
        removeProductCart:(state,action:PayloadAction<number>)=>{
             let product=state.productsCart.find(i=>i.id === action.payload)
             state.productsCart=state.productsCart.filter(i=>i.id !== action.payload)
             state.totalCart-=product!.price
          
        },
        clearCart:(state)=>{
            state.productsCart=[]
            state.totalCart=0
        }
    }
})

export const {addProductCart,removeProductCart,clearCart} =Cart.actions
export default Cart.reducer