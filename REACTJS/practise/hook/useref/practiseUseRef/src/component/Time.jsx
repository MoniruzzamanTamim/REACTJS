// import React, { useState,useEffect } from 'react'

// function Time() {
//     const [time, settime] = useState(new Date())

//     const Tick =()=>{
//         settime(new Date())
//     }
//     useEffect(()=>{
//   const interval = setInterval(Tick,1000)

//   return(()=>{
//     clearInterval(interval)
//   })
//     })
//   return (
//     <div>
//         {time.toLocaleTimeString()}
//         <button type="button">Stop Clock</button>
//     </div>
    
//   )
// }

// export default Time

import React, { useState,useEffect,useRef } from 'react'

function Time() {
    const timeRef = useRef()
    const [time, settime] = useState(new Date())

    const Tick =()=>{
        settime(new Date())
    }
    useEffect(()=>{
   timeRef.current= setInterval(Tick,1000)

  return(()=>{
    clearInterval(timeRef.current)
  })
    },[])
  return (
    <div>
        {time.toLocaleTimeString()}
        <button type="button"  onClick={()=> clearInterval(timeRef.current)}>Stop Clock</button>
    </div>
    
  )
}

export default Time