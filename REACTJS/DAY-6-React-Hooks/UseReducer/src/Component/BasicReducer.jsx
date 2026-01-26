import React, { useState, useReducer } from 'react'

const UserData = [
    {id : 1, Name: "Tamim"},
    {id : 2, Name: "Tamim"},
    {id : 3, Name: "Tamim"}
];
// Reducer Function 
const reduce =(state, action)=>{
    if (action.type == "ADD") {
         const AlluserData = [...state.useInformation, action.payload]
         return{
            ...state, 
            useInformation: AlluserData,
            isOpen : true,
              modalTex: "USer Input is Add"
         }
    }
    if (action.type == "REMOVE") {
         const RemoveUSerInput = [...state.useInformation].filter(removeinfo => removeinfo.id  !== action.payload );
         console.log(action.payload);
         return{
            ...state, 
             useInformation: RemoveUSerInput,
              isOpen : true,
              modalTex: "USer Input is Remove"

         }
    }

}

const MessageShow = ({modalTex})=>{
    return <p>{modalTex}</p>

}

const BasicReducer = () => {

// useReducer Create
const [userSate, dispatch]=useReducer(reduce, {
    useInformation : UserData,
    isOpen : false,
    modalTex: ""
})

// useState Create 
// const [useInformation, setUserInformation]= useState(UserData);
// const [isOpen, setIsopen]= useState(false);
// const [modalTex, setModalTex]= useState("");

const [userinput, setUserinput ] = useState("");  //Collect USer Input in Form

const changevallue=(e)=>{
    setUserinput(e.target.value)
}

const handlesubmit =(e)=>{
    e.preventDefault();
// Use useReducer to set Vallue
  const newinput = {id: new Date().getTime().toString(), Name: userinput} //Store User input and Custom iD in veriable 
  dispatch({type : "ADD", payload : newinput})
       
    // Use Normal State to Set Vallue

   
    // setUserInformation((preVallue)=>{
    //     const newinput = {id: new Date().getTime().toString(), Name: userinput}
    //        return[...preVallue, newinput ]
    // })
    // setIsopen(true);
    // setModalTex("Input is Added")
    

     
}


const removeInput =(id)=>{
    dispatch({type: "REMOVE", payload: id})
}



  return (
    <>

    <div>BasicReducer</div>
   <form  onSubmit={handlesubmit}>
  
        <label htmlFor="name">User Data</label>
        <input type="text" name="name" id="name" onChange={changevallue}  />
 
    <button type='submit'>Submit input</button>
   </form>
         
         {userSate.isOpen && <MessageShow  modalTex={userSate.modalTex} />}

    {userSate.useInformation.map((useInformation)=>{
        const {id,Name}= useInformation;
        return <li key={id}>{Name}
        <button type='submit' onClick={()=> removeInput(id)}>Remove</button>
        </li>
    })}
</>
  )
}






export default BasicReducer;