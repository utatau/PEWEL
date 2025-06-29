import { createSlice } from '@reduxjs/toolkit'

const keranjangSlice = createSlice({
  name: 'keranjang',
  initialState: {
    items: [],
  },
  reducers: {
    tambahKeKeranjang: (state, action) => {
      const { nama, harga, jumlah, notes, gambar } = action.payload
      const existing = state.items.find(item => item.nama === nama)

      if (existing) {
        existing.jumlah += jumlah
      } else {
        state.items.push({ nama, harga, jumlah, notes, gambar })
      }
    },
  },
})

export const { tambahKeKeranjang } = keranjangSlice.actions
export default keranjangSlice.reducer
