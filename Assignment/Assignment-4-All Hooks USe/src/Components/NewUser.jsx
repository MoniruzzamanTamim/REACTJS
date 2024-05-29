import React, {useState, useContext} from 'react'
import ContextApi from './ContextApi'





const NewUser = () => {

const {dispatch}=useContext(ContextApi);

    const CollectData = (e)=>{
        setCollectUserData((oldData)=>{
            return{ ...oldData, [e.target.name]:e.target.value } 
        })
    }
    
    const SubmitData=(e)=>{
        e.preventDefault()
        dispatch({type: "ADD" , payload:collectUserData })
        setCollectUserData( )
    }
    
    const [collectUserData, setCollectUserData]=useState("")

  return (
    <form onSubmit={SubmitData}>
        <input type="number" name="Roll" id="" onChange={CollectData} />
        <input type="text" name="Name" id="" onChange={CollectData} />
        <input type="text" name="Address" id=""  onChange={CollectData}/>
        <button>Add User Info</button>
    </form>
  )
}

export default NewUser