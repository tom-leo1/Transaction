import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creditTransaction, debitTransaction, updateTransaction } from "./transactionReducer";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.transaction);
  const [amount, setAmount] = useState('')

  console.log(data, 'data')
  const handleBalance=()=>{
    alert('Oops!! Sorry, You dont have the balance to withdraw')
    setAmount('')
  }
  return (
    <>
      <div className="col-6 m-4">
        <h1 className="text text-primary">Deposit or Withdrawal Form</h1>
        <input type="number" placeholder="Enter Amount" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAmount(e.target.value)}/>
        <button className="btn btn-primary m-2" onClick={()=>{
            dispatch(creditTransaction(amount))
            dispatch(updateTransaction({
                id:nanoid(),
                type:'CREDIT',
                amount:amount,
                date:new Date()
            }))
            setAmount('')
        }}>Credit</button>
        {data?.balance === 0?
        <>
        <button onClick={handleBalance} className="btn btn-danger">Debit</button>
        </>
        :
        <>
         <button className="btn btn-danger" onClick={()=>{
            dispatch(debitTransaction(amount))
            dispatch(updateTransaction({
                id:nanoid(),
                type:'DEBIT',
                amount:amount,
                date:new Date()
            }))
            setAmount('')
        }}>Debit</button>
        </>
        }
       
        <h3 className="text text-secondary">Balance: {data?.balance}</h3>
      </div>
    </>
  );
};

export default Form;
