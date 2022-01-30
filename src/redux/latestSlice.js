import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  latest: [], 
  status: 'idle' 
};

export const fetchLatest = createAsyncThunk('latestSlice/fetchLatest', async (url, { rejectWithValue }) => {
  
  try {
    const result = await fetch(url)
      .then( response => response.json())
      // .then( data => {
      //   data.forEach( el => {
      //       console.log('el', el)
      //   })
      // });
    return result
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const latestSlice = createSlice({
  name: 'latestSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLatest.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchLatest.fulfilled, (state, action) => {
      state.status = 'success';
      state.latest = action.payload;
    })
    builder.addCase(fetchLatest.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const latestActions = latestSlice.actions;
export default latestSlice.reducer;