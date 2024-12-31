import { createSlice } from "@reduxjs/toolkit"


const initialState={
    balance:0,
    transHistory:[]
}


const transactionSlice=createSlice({
    initialState,
    name:'transaction',
    reducers:{
        creditTransaction:(state,action)=>{
            return {...state,balance:state.balance + +action.payload}
        },
        debitTransaction:(state,action)=>{
            return {...state,balance: state.balance - +action.payload}
        },
        updateTransaction:(state:any,action)=>{
            return {...state,transHistory:[
                ...state.transHistory,{
                    transactionId: action.payload.id,
                    transactionType: action.payload.type,
                    transactionAmount: action.payload.amount,
                    transactionDate:action.payload.date
                }
            ]}
        }
    }
})

export const {creditTransaction,debitTransaction,updateTransaction} = transactionSlice.actions
export default transactionSlice.reducer