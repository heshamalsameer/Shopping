import { Cart } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartState {
  cartProducts: Cart[];
}

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProducts(state, action: PayloadAction<Cart[]>) {
      state.cartProducts = action.payload;
    },
    addToCart(state, action: PayloadAction<Cart>) {
      const existingItem = state.cartProducts.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.cartProducts = state.cartProducts
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload);
    },
  },
});

// Export actions
export const {addCartProducts, addToCart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
