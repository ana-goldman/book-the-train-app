import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  seatsOneWay: [],
  seatsWayBack: [],
  total: 0,
  totalBack: 0,
  status: 'idle' 
};

const seatsSlice = createSlice({
  name: 'seatsSlice',
  initialState,
  reducers: {
    addSeatWay(state, action) {
      state.seatsOneWay.some(a => (a.seat_number === action.payload.seat_number) && (a.coach_id === action.payload.coach_id)) ?
      state.seatsOneWay = state.seatsOneWay.filter(item => 
        item.seat_number !== action.payload.seat_number || item.coach_id !== action.payload.coach_id 
      ) : 
      state.seatsOneWay.push(action.payload)
    },
    addSeatBack(state, action) {
      state.seatsWayBack.some(a => (a.seat_number === action.payload.seat_number) && (a.coach_id === action.payload.coach_id)) ?
      state.seatsWayBack = state.seatsWayBack.filter(item => 
        item.seat_number !== action.payload.seat_number || item.coach_id !== action.payload.coach_id 
      ) : 
      state.seatsWayBack.push(action.payload)
    },
    addToTotal(state, action) {
      state.total += action.payload
    },
    subtractFromTotal(state, action) {
      state.total -= action.payload
    },
    addToTotalBack(state, action) {
      state.totalBack += action.payload
    },
    subtractFromTotalBack(state, action) {
      state.totalBack -= action.payload
    },
  },
});

export const seatsActions = seatsSlice.actions;
export default seatsSlice.reducer;