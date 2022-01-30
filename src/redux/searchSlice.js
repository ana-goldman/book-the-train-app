import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  cities: '',
  status: 'idle' 
};

export const fetchCities = createAsyncThunk('searchSlice/fetchCities', async (url, { rejectWithValue }) => {

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
  // reducers: {
  //   setCart(state, action) {
  //     state.cart.push(action.payload);
  //     state.status = 'idle' 
  //   },
  //   addMore(state, action){
  //     const addMoreOf = state.cart.find(o => o.title === action.payload.title);
  //     addMoreOf.count = addMoreOf.count + action.payload.count;
  //   },
  //   deleteItem(state, action) {
  //     state.cart = state.cart.filter(o => o.id !== action.payload);
  //   },
  //   resetStatus(state, action) {
  //     state.status = 'idle';
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.status = 'success';
      // if(action.payload === 204) {
      //   state.cities = [];
      //   state.status = 'success';
      // } else {
      //   state.status = 'error';
      // }
    })
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;