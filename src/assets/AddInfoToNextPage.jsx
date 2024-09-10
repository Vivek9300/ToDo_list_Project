import React, { useState } from 'react'
// import DisplayInfo from './DisplayInfo';
import { useNavigate } from 'react-router-dom'

function AddInfoToNextPage(){

    let [cart,setcart] = useState([]);

    let navigate = useNavigate();

    let arr = [{
        id : 1 ,
        name : "Apple ",
        description : "Apple add to cart "
    },{
        id : 2,
        name : "Banana",
        description : "Add to cart banana"
    },{
        id : 3,
        name : "Mango",
        description : "Add to cart mango"

    }]

    function sendInfo(e){
        let a =  cart.push(e);
       setcart(a);
        console.log(a);
        navigate("/a",{state:{message : cart }})
        console.log(cart)
    }

  return (

    <>
        {
            arr.map((e,i)=>{
                return (
                    <div key={i}>
                        <div>{e.id}</div>
                        <div>{e.name}</div>
                        <div>{e.description}</div>
                        <button onClick={()=>sendInfo(e)}>Add to cart</button>
                    </div>
                )
            })
        }
    </>
  )  
}

export default AddInfoToNextPage;
