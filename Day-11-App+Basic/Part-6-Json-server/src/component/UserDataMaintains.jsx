import React,{useState, useReducer, useEffect,useMemo} from 'react'

const userDataMaintains = () => {
    const [users, setUsers]= useState([]);
    const [setUser, setSetuser]= useState([]);
  console.log(setUser);

//   GEt Data
    useEffect(()=>{
        fetch("http://localhost:5001/user")
        .then((res)=>{
           if(!res.ok){
            console.log("api problem");
           }else{
            return res.json();
           }
        })
        .then((data)=>{
            setUsers(data);
        })

    },[])

// Post Data in Json Server

//     useEffect(()=>{
//         fetch("http://localhost:5001/user", {
//   method:'POST',
//   body: JSON.stringify({
//     id: 11,
//     name: 'Tamim',
//     email: 'moniruzzamantamim61@gmail.com',
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })


    // },[])

    // Update Data 
    
    // useEffect(()=>{
    //     fetch("http://localhost:5001/user/8" ,{
    //    method: 'PUT',
    //    body: JSON.stringify({
    //         name: 'Change Vallue',
    //         email: 'moniruzzamantamim61@gmail.com',

           
    //       }),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     }
    //         )
        

    // },[])

    // DELETE DATA 

    useEffect(()=>{
fetch("http://localhost:5001/user/1", {
    method:'DELETE'
})

    },[])

  return (
    <div>
        <h1>Create Database in Local Json File</h1>
             

             <h5>Get Data in Api from json-server</h5>
              
              {users.map((user)=>{
                const {id, name, email}=user
                return <article key={id}>
                    <h5>{id}</h5>
                    <h5>{name}</h5>
                    <h5>{email}</h5>
                </article>
              })}
        
    </div>
  )
}

export default userDataMaintains