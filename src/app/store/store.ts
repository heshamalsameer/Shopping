import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import productReducer from './product';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
