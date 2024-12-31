import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import axios from 'axios'

const CryptoList = () => {
    const [coinsData, setCoinsData] = useState([])
    const [perPage, setPerpage] = useState(10)
    const [currentPage, setCurrentPage] = useState(2)
    async function getData(){
        const response= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            setCoinsData(response?.data)
    }
    useEffect(()=>{
        getData()
    },[])

    console.log(coinsData,'coinsData')

    const lastIndex= currentPage * perPage
    const firstIndex =  lastIndex - perPage
    const currentData= coinsData.slice(firstIndex,lastIndex)

  return (
    <>
      <Card coinsData={currentData}/><br></br><br></br><br></br><br></br>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}

export default CryptoList
