import React,{useState, useEffect} from 'react';

const BASICUSEEFFECT = () => {


 const [count, setCount] = useState(0)

//  UseEffect Running Multiple Timen When Page Render 

 useEffect(() => {
   
    console.log("UseEffect Running Multiple Timen When Page Render ");
    document.title = `you Clicked  ${count} Times `

 })

//  UseEffect Running Only First Time Page Rendaring 

 useEffect(() => {
   
    console.log("UseEffect Running Only First Time Page Rendaring ");
    document.title = `you Clicked  ${count} Times `

 },[])

//  UseEffect Running Depent On Count vallue 
 useEffect(() => {
   
    console.log("UseEffect Running Depent On Count vallue ");
    document.title = `you Clicked  ${count} Times `

 },[count ])




    return (
        <div>
               
               <button  onClick={(()=>{ setCount((count)=> count +  1)})}>Click </button>
        </div>
    );
};

export default BASICUSEEFFECT;