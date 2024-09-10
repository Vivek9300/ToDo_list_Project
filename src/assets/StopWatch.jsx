// import React, { useEffect, useState } from 'react'

//  function StopWatch() {
//   let [time,settime] = useState(0)
//   let [isActive,setisActive] = useState(false)

//   function newTime(){
//     setTimeout(()=>{
//       settime(time => time + 1)
//      },1000)
  
//   }

//   function startTime(){
//     setisActive(true)
//   }

//   useEffect(()=>{
//    if(isActive){
//     newTime()
//    }
//   },[time,isActive])
 
  
//   return (
//     <>
      
//       <h1>{isActive ? time : time}</h1>
//       <button onClick= {startTime}>Start</button>
      
//     </>
//   )
// }

// export default StopWatch;




  // setTimeout(()=>{
  // console.log("Hello vivek")
  // },3000)
  // setTimeout(()=>{},3000)




  import React, { useEffect, useState } from "react";

function StopWatch() {

    let[time,setTime] = useState(0);
    let [isactive,setIsactive] = useState(false);
    let [isstop,setIstop] = useState(false);
    let [pause,setPause] = useState(true)
    let timeout = null;

    function buttonB() {                                     
       timeout =  setTimeout(()=>{return setTime(time+1)},1000);
    }

    console.log(isactive);

    function startButton() {
        // clearInterval(buttonB)
        setIsactive(true);
    } 

    function resetButton() {
        setTime(time = 0);
    }

    function stopButton() {
        clearTimeout(timeout);
        stButton();
    }
    
    function stButton() {
        setIstop(true);
        console.log(isstop);
        setTime(0);
        setIsactive(false)
        setPause(true)
    }

    function pauseButton() {
        clearTimeout(timeout);
        setIsactive(false)
        setPause(false)

    }

    useEffect(()=>{
        if(isactive){
            buttonB();
        }
        
    },[time,isactive,pause])

    return(
        <>
            <h1>{isactive ? time : pause ? 0 : time}</h1>
            <button onClick={()=>startButton()}>Start</button>    
            <button onClick={()=>pauseButton()}>Pause</button>
            <button onClick={()=>stopButton()}>Stop</button>
            <button onClick={()=>resetButton()}>Reset</button>
        </>
    )
}

export default StopWatch;    