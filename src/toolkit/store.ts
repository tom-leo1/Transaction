import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from '../toolkit/transactionReducer'

export const store=configureStore({
    reducer:{
        transaction: transactionSlice
    }
})