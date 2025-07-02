import { createSlice } from '@reduxjs/toolkit'

const keranjangSlice = createSlice({
  name: 'keranjang',
  initialState: {
    items: [],
  },
  reducers: {
    tambahKeKeranjang: (state, action) => {
      const { menu, harga, jumlah, notes, gambar } = action.payload
      const existing = state.items.find(item => item.menu === menu)

      if (existing) {
        existing.jumlah += jumlah
      } else {
        state.items.push({ menu, harga, jumlah, notes, gambar })
      }
    },
  },
})

export const { tambahKeKeranjang } = keranjangSlice.actions
export default keranjangSlice.reducer
