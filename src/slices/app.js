import { createSlice } from "@reduxjs/toolkit";
import { authenticate } from "./user";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    appVersion: null,
    appBuildNumber: null,
    deviceType: null,
    storeIsLoaded: false,
    accessToken: null,
    apiAuth: {
      auth: { 
        "username": "restest_mobile", 
        "password": "123abcdef" 
      }
    }
  },
  reducers: { 
    signOut: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state, _action) => {
      state.accessToken = null;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.response.access_token;      
    });
  }
});

export const { signOut } = appSlice.actions;
export default appSlice.reducer;