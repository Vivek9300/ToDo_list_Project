import React, { useState } from 'react'

 function AddFavNo() {

    let [number,setnumber] = useState([1,2,4,5,6,7,8,9,10])
    let [inputNumber,setinputNumber] = useState("")

    function missingNumber(e){
        setinputNumber(e.target.value)
    }

    function addNumber(){
        let  num = Number(inputNumber)
        if(num >= 1 && num <=10   && !number.includes(num)){
            // let newNumbers = [...number, num].sort((a, b) => a - b);
            let newNumbers = [...number,num].sort((a,b)=> a-b)
            setnumber(newNumbers)
        }
    }
 

  return (
    <>
       <h1>{number}</h1>
       <input type='number' placeholder='Enter Missing Number' value={inputNumber} onChange={(e)=>missingNumber(e)}/>
      <button onClick={addNumber}>Add Number</button>
    </>
  )
}

export default AddFavNo;

// import React,{useState,useReducer} from 'react'

//     function reducer(state,action){
//         console.log(state)

//         if(action.type= "addNumber"){
//             console.log(action)
//             let  num = [action.payload.inputNumber]
//             if(num >= 1 && num <=10   && !action.payload.number.includes(num)){}
//                 let newNumbers = [...action.payload.number,num].sort((a,b)=> a-b)
//               state = newNumbers;
//               return state; 
//             }
//             return state ;
//         }
//     }

//  function AddFavNo() 
//     let [number,dispatch] = useReducer(reducer,[1,2,4,5,6,7,8,9,10])

//     let [inputNumber,setinputNumber] = useState("")

//     function missingNumber(e){
//         setinputNumber(e.target.value)
//     }

//   return (
//     <>
//       <h1>{number}</h1>
//       <input type='number' placeholder='Enter Missing Number' value={inputNumber} onChange={(e) => missingNumber(e)}/>
//       <button onClick={()=>dispatch ({type: "addNumber", payload :{ number:number,inputNumber:inputNumber}})}>Add Number</button>
//     </>
//   )
// }

//   export default AddFavNo;




// import React,{useState,useReducer} from 'react'
// function reducer(state,action){

//   if(action.type = "addNUmber"){

//     let num = [action.payload.inputNumber]
//     if(num >= 1 && num <= 10 && !action.payload.number.includes(num)){
//     let newNumber = [...action.payload.number,num].sort((a,b)=>a-b)
//     state = newNumber;
//     return state;
//      }
//     return state;
//   }
// }



// function AddFavNo() {

//   let [number,dispatch] = useReducer(reducer,[1,2,4,5,6,7,8,9])

//   let [inputNumber,setinputNumber] = useState("")

//   function missingNumber(e){
//     setinputNumber(e.target.value)
//   }

//   return (
//     <>
//       <input type="number" placeholder='Enter missing number' value={number} onChange={(e)=>missingNumber(e)}/>
//       <button onClick={()=>dispatch({type : "addNumber",payload :{ number:number,inputNumber:inputNumber}})}>Add Fav Number</button>
//     </>
//   )
// }

// export default AddFavNo;
