import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import giftReducer from '../features/giftSlice';
import apiReducer from '../features/apiSlice';

// Configure the Redux store with the counterReducer as the reducer
const store = configureStore({
  reducer: {
    gifts: giftReducer,
    api: apiReducer,
  },
});

// Export the configured store as the default export of this module
export default store;

