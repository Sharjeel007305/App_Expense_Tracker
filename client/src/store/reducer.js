import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categoriesmodels: [],
    transaction: [],
}

export const expenseSlice = createSlice({
 name: 'expense',
 initialState,
 reducers : {
    getTransactions: (state) => {
        //get code

    }
 }
})

export const {getTransactions}  = expenseSlice.actions;
export default expenseSlice.reducer;