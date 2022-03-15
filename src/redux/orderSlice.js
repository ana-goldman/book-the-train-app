import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  user: '',
  passengers: [],
  status: 'idle' 
};

export const postOrder = createAsyncThunk('orderSlice/postOrder', async (body, { rejectWithValue }) => {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
    
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}order`, requestOptions)
      .then(response => response.status)
    return response
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    addPassenger(state, action) {
      state.passengers.push(action.payload);
    },
    removePassenger(state, action) {
      state.passengers = state.passengers.filter(item => {
        for (let key in action.payload) {
          if (item[key] === undefined || item[key] !== action.payload[key])
            return item[key] !== action.payload[key]
        }
      })
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(postOrder.fulfilled, (state, action) => {
      if(action.payload === 204) {
        state.passengers = [];
        state.user = '';
        state.status = 'success';
      } else {
        state.status = 'error';
      }
    })
    builder.addCase(postOrder.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;