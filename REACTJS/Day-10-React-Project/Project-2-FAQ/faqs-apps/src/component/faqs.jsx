import React,{useState} from 'react'
import {faqsData} from './faqsData'
import FAQ from './faq'


const [ faqs, setFaqs] = ([faqsData])

 console.log(faqs);
const Faqs = ()=>{
    return(
        <main>
          

           {faqs.map((faq)=> <FAQ  key={faq.id}  {...faq} />  )}


        </main>
      
    )
}


export default Faqs;