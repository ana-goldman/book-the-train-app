import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  status: 'idle' 
};

export const subscribe = createAsyncThunk('subscriptionSlice/subscribe', async (email, { rejectWithValue }) => {

  try {
    const result = await fetch(`${process.env.REACT_APP_BASE_URL}subscribe?email=${email}`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
      .then( response => response.json())
    return result
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const subscriptionSlice = createSlice({
  name: 'subscriptionSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(subscribe.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(subscribe.fulfilled, (state, action) => {
      if(action.payload.status === true) {
        state.status = 'success';
      } else {
        state.status = 'error';
      }
    })
    builder.addCase(subscribe.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const subscriptionActions = subscriptionSlice.actions;
export default subscriptionSlice.reducer;