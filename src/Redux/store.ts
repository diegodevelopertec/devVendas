import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/cartSlice';




const store = configureStore({
  reducer: {
    cart: CartReducer,
   
  },
});

export default store;
export type RootState=ReturnType<typeof store.getState>