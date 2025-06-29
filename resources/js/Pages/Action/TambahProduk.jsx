import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    tambahProduk: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    kosongkanKeranjang: (state) => {
      state.items = [];
    },
  },
});

export const { tambahProduk, kosongkanKeranjang } = cartSlice.actions;
export default cartSlice.reducer;
