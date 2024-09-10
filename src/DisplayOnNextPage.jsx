import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DisplayOnNextPage() {

let[info,setinfo] = useState();    

let navigate = useNavigate();

function EnterInput(e){
    setinfo(e.target.value)
}

function sendInfo(){
    // window.localStorage.setItem("name",info)

    // navigate("/a")
    navigate("/a",{state:{message:info}})
} 

  return (
    <>
      <h1>Information</h1>
      <input type="text" placeholder='Enter the value' onChange={(e)=>EnterInput(e)}/>
      <button onClick={()=>sendInfo()}>Send Info</button>
    </>
  )
}

export default DisplayOnNextPage;
