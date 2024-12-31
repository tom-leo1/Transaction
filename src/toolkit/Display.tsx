import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const data = useSelector((state: any) => state?.transaction);

  return (
    <>
      <div className="col-6 m-4">
        <h1 className="text text-primary">Transaction istory</h1>
        <table className="table border">
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Transaction Type</th>
              <th>Transaction Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.transHistory?.map((item:any) => (
              <tr key={item?.transactionId}>
                <td>{item?.transactionId}</td>
                {item?.transactionType === 'CREDIT'?
                <>
                <td style={{color:'green'}}>{item?.transactionType}</td>
                </>
                :
                <>
                <td style={{color:'red'}}>{item?.transactionType}</td>
                </>
                }
                
                <td>{item?.transactionAmount}</td>
                <td>{item?.transactionDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
