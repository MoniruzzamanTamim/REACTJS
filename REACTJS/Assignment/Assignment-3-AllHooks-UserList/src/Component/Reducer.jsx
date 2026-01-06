
import React from 'react'



export const initialState = {

    isLoading: true,
    userData: '',
    error: '', 
    finalMessage: ''
}


export const reducerFunction =(state,action)=>{

    switch (action.type) {
        case 'RES' :
            return{
              ...state,
              isLoading: false,
              userData: action.payload,
              error: '', 
              finalMessage: ""
            }
            case 'FIELD' :
               return {
                    ...state,
                    isLoading: false,
                    userData: '',
                    error:"Your API NOT CONNECTED", 
                    finalMessage: ""
                }
                case 'ADD' :
                    
                    return {
                        ...state,
                        isLoading: false,
                        userData: [...state.userData, action.payload],
                        error:'',
                        finalMessage: "Thanks For Adding"
                    }
                    case 'DELETE' :
                        const deleteData = state.userData.filter((data)=> data.id !== action.payload)
                    return {
                      
                        ...state,
                        isLoading: false,
                        userData: deleteData,
                        error:'',
                        finalMessage: "Your Data Was Delete"
                    }
            
        default:
            break;
    }

}

