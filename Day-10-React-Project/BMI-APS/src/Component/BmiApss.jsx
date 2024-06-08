import React, {useReducer} from 'react'

const reducerFunction =(state, action)=>{
        
    switch (action.type) {
        case "heightChange":
            return {
                ...state,
                height: action.payload,
                
            }
        case "weightChange":
            return {
                ...state,
                weight: action.payload,
               
            }
         
        case "CalculateBMI":
            return {
                ...state,
           totalBmi: action.payload,  
           isshow: true
            }        
    
        default:
            break;
    }
}


const BmiApss = () => {

   
   const [BmiState, dispatch] = useReducer(reducerFunction,{
      height: '',
      weight: '',
      totalBmi : 0,
      isshow: false

   })

   console.log(BmiState);


   const SubmitData=(e)=>{
    const bmiValue = (BmiState.weight / ((BmiState.height / 100) ** 2)).toFixed(2);
    e.preventDefault();
    dispatch({type: "CalculateBMI", payload: bmiValue})
   }

  return (
    <div>

         <form onSubmit={SubmitData}>
            <div>
                <label htmlFor="height"> Height</label>
                <input type="number" name="height" id=""  onChange={(e)=> dispatch({type: "heightChange", payload: e.target.value })} />
            </div>
            <div>
                <label htmlFor="weight"> Weight</label>
                <input type="number" name="weight" id="" onChange={(e)=> dispatch({type: "weightChange", payload: e.target.value })} />
            </div>

            <button type='submit'>Calculate BMI</button>
         </form>

        
           {BmiState.isshow && <h2>Your BMI Result is : {BmiState.totalBmi}</h2>}
         


    </div>
  )
}

export default BmiApss