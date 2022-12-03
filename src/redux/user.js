import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import agent from '../agent';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  agent.Profile.get
);

const userSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    profilePageUnloaded: () => ({}),
  },
  extraReducers: (builder) => {
    const successCaseReducer = (_, action) => ({
      ...action.payload.profile,
    });

    builder.addCase(getProfile.fulfilled, successCaseReducer);
  },
});

export const { profilePageUnloaded } = userSlice.actions;

export default userSlice.reducer;
