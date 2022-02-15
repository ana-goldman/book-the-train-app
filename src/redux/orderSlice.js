import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  total: null,
  totalBack: null,
  status: 'idle' 
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload
    },
    setTotalBack(state, action) {
      state.totalBack = action.payload
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;