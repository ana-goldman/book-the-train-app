import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  passengers: [],
  status: 'idle' 
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    addPassenger(state, action) {
      state.passengers.push(action.payload);
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;