import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'profile',
  initialState: {
    errMsg: null,
    user: null,
    currentUser: null,
  },
  reducers: {
    errorMessage: (state, action) => {
      state.errMsg = action.payload;
    },
    loginAction: (state) => {
      state.errMsg = null
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    logoutAction: (state) => {
      state.user = null;
      state.errMsg = null;
      state.currentUser = null;
    }
    
  }
});

export const { 
  loginAction,
  getUser,
  logoutAction,
  errorMessage
} = userSlice.actions;

export default userSlice.reducer;
