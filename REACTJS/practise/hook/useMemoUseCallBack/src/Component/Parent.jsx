import React,{useState,useCallback, useMemo} from 'react'
import Button from './Button'
import ShowItem from './ShowItem'
import Title from './Title'



function Parent() {

    // const [state, dispatch] = useReducer(first, second, third)
   const [count1, setCount1] = useState(0)
   const [count2, setCount2] = useState(10)

   const incrementOne=useCallback(()=>{
    setCount1((pre)=>pre+1 )
   },[])
   const incrementTwo= useCallback(()=>{
    setCount2((pre)=>pre+10 )
   },[])

   const calculate =useMemo(()=>{
        let i = 0;
        while (i < 1000000000) i += 1; // costly operation
        return count1 % 2 === 0;
   },[count1])

  return (
<>
<h1>Main Component </h1>
<Title/>
    
    <ShowItem title = 'Count 1' count={count1}  />
    <Button btnclick={incrementOne}>Increment 1 </Button>
    {calculate ? 'Even':'odd'}
    
    <ShowItem title = 'Count 2' count={count2}/>
    <Button btnclick={incrementTwo}>Increment 2 </Button>

</>
  )
}

export default React.memo(Parent)