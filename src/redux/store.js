import { configureStore } from "@reduxjs/toolkit"; 
import searchSlice from './searchSlice';
import subscriptionSlice from './subscriptionSlice';

const store = configureStore({
  reducer: {
    searchSlice,
    subscriptionSlice,
  }
})

export { store };