import { configureStore } from "@reduxjs/toolkit";
import cartReucer from "./cartSlice";
const appStore = configureStore({ reducer: {
    cart:cartReucer
} });

export default appStore;
