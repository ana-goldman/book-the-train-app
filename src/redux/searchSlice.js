import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  cityFrom: '',
  cityTo: '',
  routes: '',
  total: '',
  haveFourthClass: false,
  haveThirdClass: false,
  haveSecondClass: false,
  haveFirstClass: false,
  haveWifi: false,
  haveExpress: false,
  priceFrom: null,
  priceTo: null,
  startDepartureHourFrom: null,
  startDepartureHourTo: null,
  startArrivalHourFrom: null,
  startArrivalHourTo: null,
  endDepartureHourFrom: null,
  endDepartureHourTo: null,
  endArrivalHourFrom: null,
  endArrivalHourTo: null,
  dateThere: null,
  dateBack: null,
  status: 'idle' 
};

export const fetchRoutes = createAsyncThunk('searchSlice/fetchRoutes', async (url, { getState, rejectWithValue }) => {
  const state = getState();

  // date
  if(state.searchSlice.dateThere) url = `${url}&date_start=${state.searchSlice.dateThere}`;
  if(state.searchSlice.dateBack) url = `${url}&date_end=${state.searchSlice.dateBack}`;
  // switches
  if(state.searchSlice.haveSecondClass) url = `${url}&have_second_class=${state.searchSlice.haveSecondClass}`;
  if(state.searchSlice.haveThirdClass) url = `${url}&have_third_class=${state.searchSlice.haveThirdClass}`;
  if(state.searchSlice.haveFourthClass) url = `${url}&have_fourth_class=${state.searchSlice.haveFourthClass}`;
  if(state.searchSlice.haveFirstClass) url = `${url}&have_first_class=${state.searchSlice.haveFirstClass}`;
  if(state.searchSlice.haveWifi) url = `${url}&have_wifi=${state.searchSlice.haveWifi}`;
  if(state.searchSlice.haveExpress) url = `${url}&have_express=${state.searchSlice.haveExpress}`;
  // price 
  if(state.searchSlice.priceFrom) url = `${url}&price_from=${state.searchSlice.priceFrom}`;
  if(state.searchSlice.priceTo) url = `${url}&price_to=${state.searchSlice.priceTo}`;
  // time there 
  if(state.searchSlice.startDepartureHourFrom) url = `${url}&start_departure_hour_from=${state.searchSlice.startDepartureHourFrom}`;
  if(state.searchSlice.startDepartureHourTo) url = `${url}&start_departure_hour_to=${state.searchSlice.startDepartureHourTo}`;
  if(state.searchSlice.startArrivalHourFrom) url = `${url}&start_arrival_hour_from=${state.searchSlice.startArrivalHourFrom}`;
  if(state.searchSlice.startArrivalHourTo) url = `${url}&start_arrival_hour_to=${state.searchSlice.startArrivalHourTo}`;
  // time back 
  if(state.searchSlice.endDepartureHourFrom) url = `${url}&end_departure_hour_from=${state.searchSlice.endDepartureHourFrom}`;
  if(state.searchSlice.endDepartureHourTo) url = `${url}&end_departure_hour_to=${state.searchSlice.endDepartureHourTo}`;
  if(state.searchSlice.endArrivalHourFrom && state.searchSlice.dateBack) url = `${url}&end_arrival_hour_from=${state.searchSlice.endArrivalHourFrom}`;
  if(state.searchSlice.endArrivalHourTo && state.searchSlice.dateBack) url = `${url}&end_arrival_hour_to=${state.searchSlice.endArrivalHourTo}`;
  
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
    setHaveFourthClass(state, action) {
      state.haveFourthClass = action.payload;
    },
    setHaveThirdClass(state, action) {
      state.haveThirdClass = action.payload;
    },
    setHaveSecondClass(state, action) {
      state.haveSecondClass = action.payload;
    },
    setHaveFirstClass(state, action) {
      state.haveFirstClass = action.payload;
    },
    setHaveWifi(state, action) {
      state.haveWifi = action.payload;
    },
    setHaveExpress(state, action) {
      state.haveExpress = action.payload;
    },
    setPriceFrom(state, action) {
      state.priceFrom = action.payload;
    },
    setPriceTo(state, action) {
      state.priceTo = action.payload;
    },
    setStartDepartureHourFrom(state, action) {
      state.startDepartureHourFrom = action.payload;
    },
    setStartDepartureHourTo(state, action) {
      state.startDepartureHourTo = action.payload;
    },
    setStartArrivalHourFrom(state, action) {
      state.startArrivalHourFrom = action.payload;
    },
    setStartArrivalHourTo(state, action) {
      state.startArrivalHourTo = action.payload;
    },
    setEndDepartureHourFrom(state, action) {
      state.endDepartureHourFrom = action.payload;
    },
    setEndDepartureHourTo(state, action) {
      state.endDepartureHourTo = action.payload;
    },
    setEndArrivalHourFrom(state, action) {
      state.endArrivalHourFrom = action.payload;
    },
    setEndArrivalHourTo(state, action) {
      state.endArrivalHourTo = action.payload;
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