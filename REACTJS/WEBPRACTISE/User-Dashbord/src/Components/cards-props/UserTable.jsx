import React  from 'react'
import Loader from '../Loader'

function Usertable({users,error,loading,onDeleteUser}) {
    // console.log("userTable Rendaring");
    
    
  return (
     <>
    {loading && <Loader/>  }
  <div className="userCard-section" style={{display:'flex', justifyContent:'start', flexWrap:'wrap'}}>
     {users.map((user) => (

  <div className="userCard" key={user.id} style={{flexBasis:'25%',}} >
    <div className="userinfoOne">
      <h4>UserName: {user.username}</h4>
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
      <h4>Email: {user.email}</h4>
    </div>
    <div className="companyinfo">
      <h4>Company Name: {user.company.name}</h4>
      <h4>Website: {user.website}</h4>
    </div>
    <button style={{width:'100%', backgroundColor:'black', color:'white'}} onClick={()=> onDeleteUser(user)}>Delete User</button>
    
  </div>
))}
  </div>


    {error && <h1>Error</h1>}
   </>
  )
}

export default Usertable