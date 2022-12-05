import { createSlice } from '@reduxjs/toolkit';


const reportSlice = createSlice({
  name: 'profile',
  initialState: {
      allcustomer: null,
      customer: null,
      errMsg: null,
  },
  reducers: {
    All_Customers: (state, action) =>{
      state.allcustomer = action.payload;
      state.errMsg = null;
    },
    getReport: (state, action) => { 
      state.customer = action.payload;
      state.errMsg  = null;
    },
    getReportError: (state, action) => {
      state.errMsg = action.payload;
    }
  }
});

export const { 
  All_Customers,
  getReport,
  getReportError
 

} = reportSlice.actions;

export default reportSlice.reducer;
