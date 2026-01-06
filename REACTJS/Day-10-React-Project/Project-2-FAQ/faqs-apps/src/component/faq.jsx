import React,{useState} from 'react'
import style from "./faq.module.css"



const Faq = ({id,title,des})=>{
   
   const [faq, setFaq] = useState(false)
    return(
    
       
      <section className={style.mainback}> 


        
      <div className={style.title}>
       <h2>{title}</h2>
       <button className={style.buttondesign} onClick={()=>{setFaq(!faq)}}>{faq? "-" : "+"}</button>
       </div>



      {faq && (
         <div className={style.des}>
         <p style={{backgroundColor: "white",}}>{des}</p>
         </div>
      )}

      </section>
        
       
            
   

    )
}


export default Faq;