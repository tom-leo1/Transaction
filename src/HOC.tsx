import React, { useState } from 'react'

const HOC = (AppComponent:any) => {
  return ()=>{
    const[auth, setAuth] = useState(true)
    return (
        <>
          {!auth?
          <><h2>Please Login.....</h2></>
          :
          <>
          <h1>Higher Order Component</h1>
          <p>HOC takes the component and returns the component with extendable features</p>
          <AppComponent name="Vinod Kumar Reddy Palle"/>
          </>
          }
        </>
      )
  }
}

export default HOC
