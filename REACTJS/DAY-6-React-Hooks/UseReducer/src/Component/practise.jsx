import React, {useState, useReducer} from 'react'


//  Dammy DaTa 
const userDammyData = [
    {id: 1, Name: "Tamim"},
    {id: 2, Name: "Tamim"},
    {id: 3, Name: "Tamim"},
    {id: 4, Name: "Tamim"},
    {id: 5, Name: "Tamim"},

];



// Step2==>  Create useReducer Function throw useReducer
const reducer =(state, action)=>{
   if (action.type== "ADD") {
         const AllUserData = [...state.userDatas, action.payload]

         return{
            userDatas: AllUserData,
             isOpen : true,
             ItemMessage: " User Data is Added",
         }
   }
   if (action.type== "REMOVE") {
   const RemoveData = [...state.userDatas].filter(userData => userData.id !== action.payload)
    return{
        ...state,
       userDatas: RemoveData,

        ItemMessage: " User Data is REmoved",
    }
}
  
}


const practise = () => {

    // Collect UserData
    const [collectInput, setCollectInput] = useState("");

    //Step1 ==>  Manage User Data in Browser Use useReducer 

const [userDataState, dispatch]=useReducer(reducer,{
    userDatas: userDammyData,
    isOpen : false,
    ItemMessage: "",
})

// Add INPUT
const handleData =(e)=>{
    e.preventDefault();
    // Step3==> Dispatch DAta
    const AllData = {id: new Date().getTime().toString(), Name: collectInput}
         dispatch({type: "ADD", payload: AllData})
    
}

// Delete Input
const removeData=(id)=>{
    dispatch({type: "REMOVE", payload : id})
}
// ADD OR REMOVE MESSAGE 
const ShowMessage=({ItemMessage})=>{
    return <p>{ItemMessage}</p>
}




  return (

    <div>
        <br /><br /><br />
 <h1>Practise Reducer</h1>
 <br />

 <form action="" onSubmit={handleData}>
    <input type="text" onChange={(e)=>setCollectInput(e.target.value)} />
    <button type='submit' >Add</button>
 </form>
        
  {userDataState.isOpen && <ShowMessage ItemMessage={userDataState.ItemMessage} />}

         {userDataState.userDatas.map((userdata)=>{
            const {id, Name}= userdata
            return <li key={id}> {Name} <button onClick={()=>removeData(id)}>Remove</button></li>
         })}


    </div>
  )
}

export default practise;