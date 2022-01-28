import { configureStore } from "@reduxjs/toolkit"; 
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchSlice,
  }
})

export { store };