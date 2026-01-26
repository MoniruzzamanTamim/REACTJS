import React from 'react'


function Search({HandleSearchValue,search}) {

  return (
   <>

   <div className="searchuser">
       <input type="text"
        placeholder="Search by name, username, email"
        value={search} onChange={HandleSearchValue} />
   </div>
   
   
   </>
  )
}

export default Search