import React from 'react'
import { useLocation } from 'react-router-dom'

function DisplayInfo() {

    let location = useLocation()

    // console.log(location.state.message[0].name)
  return (
    <>
        {/* <h1>
        {
            location.state.message[0].name
        }
        </h1>

        <h1>
        {
             location.state.message[0].description
        }
        </h1> */}

          <h1>
            {/* {window.localStorage.getItem("name")} */}

            {location.state.message}
          </h1>
    </>
  )
}

export default DisplayInfo;
