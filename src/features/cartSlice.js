import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const discountValue = Number(newItem.discount) || 0;
      const effectivePrice =
        discountValue > 0
          ? newItem.price - (newItem.price * discountValue) / 100
          : newItem.price;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity += 1;
        state.totalAmount += effectivePrice;
        state.items.push({
          id: newItem.id,
          title: newItem.name || newItem.title,
          price: effectivePrice,
          quantity: 1,
          totalPrice: effectivePrice,
          image: newItem.image,
        });
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
