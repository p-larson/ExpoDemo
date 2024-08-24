import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../api';

export const authenticate = createAsyncThunk(
  'user/authenticate',
  async ({ email, password, accessToken }, { rejectWithValue, getState }) => {
    console.log('START authenticate', email);

    const body = {
      email,
      ...(accessToken ? { access_token: accessToken } : { password })
    };

    try {
      const response = await Api.post(
        getState().app, 
        'http://localhost:3000/api/1.1/users/authenticate', 
        body
      );
      
      return { data: response };
    } catch (err) {
      return rejectWithValue(err.error || 'Unknown Error');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    mostRecentEmailAddress: null,
    isAuthenticating: false
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.currentUser = action.payload.data.response.resident_user;
      state.mostRecentEmailAddress = state.currentUser.email;
    });
  }
});

export default userSlice.reducer;