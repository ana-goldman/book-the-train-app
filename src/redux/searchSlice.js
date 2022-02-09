import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  cityFrom: '',
  cityTo: '',
  routes: '',
  total: '',
  dateThere: null,
  dateBack: null,
  status: 'idle' 
};

export const fetchRoutes = createAsyncThunk('searchSlice/fetchRoutes', async (url, { rejectWithValue }) => {

  try {
    const result = await fetch(url)
      .then( response => response.json())
    return result
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setFrom(state, action) {
      state.cityFrom = action.payload
    },
    setTo(state, action) {
      state.cityTo = action.payload
    },
    setDateThere(state, action) {
      state.dateThere = action.payload
    },
    setDateBack(state, action) {
      state.dateBack = action.payload
    },
    changeDirection(state) {
      const from = current(state.cityFrom);
      const to = current(state.cityTo);
      state.cityFrom = to;
      state.cityTo = from;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchRoutes.fulfilled, (state, action) => {
      state.routes = action.payload.items;
      state.total = action.payload.total_count;
      state.status = 'success';
    })
    builder.addCase(fetchRoutes.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;