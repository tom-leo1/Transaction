import React from 'react'
type PaginationProps={
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>,
    currentPage:number
}
const Pagination = ({setCurrentPage,currentPage}:PaginationProps) => {
    let pages=[]
    for(let i=1; i<=10;i++){
        pages.push(i)
    }
  return (
    <>
      {
        pages?.map((page)=><><button style={{width:'80px',marginLeft:'30px'}} onClick={()=>setCurrentPage(page)} disabled={page == currentPage}>{page}</button></>)
      }
    </>
  )
}

export default Pagination
