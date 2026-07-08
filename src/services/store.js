import { configureStore } from "@reduxjs/toolkit";
import isManuOpen from "../features/UiSlice";
import cartReducer from "../features/cartSlice";

const CART_STORAGE_KEY = "medical-app-cart";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem(CART_STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CART_STORAGE_KEY, serializedState);
  } catch (error) {
    // ignore write errors
  }
};

const preloadedState = {
  cart: loadCartState() || undefined,
};

const store = configureStore({
  reducer: {
    isManuOpen,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export default store;
