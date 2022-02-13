import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  total: null,
  status: 'idle' 
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;