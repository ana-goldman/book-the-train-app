import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  route: '',
  status: 'idle' 
};

// export const fetchRoutes = createAsyncThunk('searchSlice/fetchRoutes', async (url, { rejectWithValue }) => {

//   try {
//     const result = await fetch(url)
//       .then( response => response.json())
//     return result
//   } catch (error) {
//     return rejectWithValue('Opps there seems to be an error')
//   }

// });

const routeSlice = createSlice({
  name: 'routeSlice',
  initialState,
  reducers: {
    setRoute(state, action) {
      state.route = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchRoutes.pending, (state) => {
  //     state.status = 'loading'
  //   })
  //   builder.addCase(fetchRoutes.fulfilled, (state, action) => {
  //     state.routes = action.payload.items;
  //     state.total = action.payload.total_count;
  //     state.status = 'success';
  //   })
  //   builder.addCase(fetchRoutes.rejected, (state, action) => {
  //     state.status = 'error';
  //   })
  // }
});

export const routeActions = routeSlice.actions;
export default routeSlice.reducer;