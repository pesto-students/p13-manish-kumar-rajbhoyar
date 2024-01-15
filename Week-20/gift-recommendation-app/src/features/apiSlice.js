import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGifts = createAsyncThunk('gifts/fetchGifts', async (request) => {
    // const response = await axios.get('https://api.openai.com/v1/chat/completions');
    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{"role": "user", "content": request}],
          // Add other parameters as needed
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
    return response.data.choices[0].message.content;
  });

  const apiSlice = createSlice({
    name: 'gifts',
    initialState: { data: [], loading: false, error: null },
    reducers: {
      
    },
    extraReducers: builder => {
      builder
    
        .addCase(fetchGifts.pending, state => {
          console.log('inside pending');
          state.loading = true;
        })
        .addCase(fetchGifts.fulfilled, (state, action) => {
          console.log('inside fulfilled');
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchGifts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default apiSlice.reducer;