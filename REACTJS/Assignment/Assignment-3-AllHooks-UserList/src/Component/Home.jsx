import React from 'react'
import CustomHooks from './CustomHooks.jsx'
import Users from './Users.jsx'
import Context from './Context'

import NewUsers from './NewUser.jsx'






const Home = () => {

    const  { userList, dispatch } = CustomHooks("https://jsonplaceholder.typicode.com/users");
  
  return (
    <div>
        

        <Context.Provider value ={{userList, dispatch}}>
          <NewUsers/>
          <Users />
         
        </Context.Provider>
    
          

        
    </div>
  )
}

export default Home



// Step1: Create 7 Component ==> Home==>Users==>User==>CustomHooks(API)==>CustomReducer==>Context==> NewUserCreate

// ==> Collect User From Custom Hooks in Useeffect 
// ==> 