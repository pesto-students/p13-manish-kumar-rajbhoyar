import { createSlice } from '@reduxjs/toolkit';

const giftSlice = createSlice({
  name: 'gift',
  initialState: {
    age: 0,
    gender: "",
    interests: ""
  },
  reducers: {
    setAge: (state, action) => {
        state.age = action.payload;
    },
    setGender: (state, action) => {
        state.gender = action.payload;
    },
    setInterests: (state, action) => {
        state.interests = action.payload;
    }
  },
});

export const { setAge, setGender, setInterests } = giftSlice.actions;

export default giftSlice.reducer;