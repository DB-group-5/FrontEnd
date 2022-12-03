import { createSlice } from "@reduxjs/toolkit";

const supplySlice = createSlice({
    name: 'article',
    initialState:{
        errMsg: undefined,
        // lấy chi tiết
        supply: null,
        allSupply: undefined,
        
        bolt: undefined,
        current_price: null
    },
    reducers:{
        errorMsg: (state, action) => {
            state.errMsg = action.payload;
        },
        getSupply: (state, action) => {
            state.supply = action.payload;
        },
        getAll: (state, action) => {
            state.allSupply = action.payload;
        },
        getBolt: (state, action) =>{
            state.bolt = action.payload;
        },
        getPrice: (state, action) => {
            state.current_price = action.payload;
        }
    }
});

export const {
    errorMsg,
    getSupply,
    getAll,
    getBolt,
    getPrice
} = supplySlice.actions;

export default supplySlice.reducer;