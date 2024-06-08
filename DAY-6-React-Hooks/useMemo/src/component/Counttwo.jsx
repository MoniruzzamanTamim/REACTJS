import React,{useState} from 'react'

const Counttwo = ({receivefunction}) => {
    console.log("Counttwo is Rendaring");
    const[count, setCount]=useState(0)
  
  return (
    <div>
          <p>Component Third  is Update when This vallue no update for count vallue</p>
         <button onClick={receivefunction}>Button Click </button>
        
    </div>
  )
}

export default React.memo(Counttwo)