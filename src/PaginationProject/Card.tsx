import React from 'react'

const Card = ({coinsData}:any) => {
  return (
    <>
      {coinsData?.map((item:any)=><><img src={item?.image}/></>)}
    </>
  )
}

export default Card
