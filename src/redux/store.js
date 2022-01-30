import { configureStore } from "@reduxjs/toolkit"; 
import searchSlice from './searchSlice';
import subscriptionSlice from './subscriptionSlice';
import latestSlice from './latestSlice';

const store = configureStore({
  reducer: {
    searchSlice,
    subscriptionSlice,
    latestSlice,
  }
})

export { store };