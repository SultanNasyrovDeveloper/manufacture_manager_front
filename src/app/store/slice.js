import { createSlice } from '@reduxjs/toolkit'

const initialState = {
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const { actions } = counterSlice;

export default counterSlice.reducer;