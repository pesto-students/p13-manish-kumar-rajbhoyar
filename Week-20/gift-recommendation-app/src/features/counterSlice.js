import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the Redux store that manages the counter state
const counterSlice = createSlice({
  name: 'counter', // The name of the slice
  initialState: 0, // The initial state of the slice
  reducers: {
    // Reducer function that increments the counter state by 1
    increment: state => state + 1,
    // Reducer function that decrements the counter state by 1
    decrement: state => state - 1,
  },
});

// Export the increment and decrement actions from the counter slice
export const { increment, decrement } = counterSlice.actions;

// Export the counter reducer function from the counter slice
export default counterSlice.reducer;