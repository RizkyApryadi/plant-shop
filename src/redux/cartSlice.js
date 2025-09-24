import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, name, price, image, qty}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(p => p.id === item.id);
      if (!exist) {
        state.items.push({ ...item, qty: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item) item.qty++;
    },
    decrease: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item && item.qty > 1) item.qty--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
