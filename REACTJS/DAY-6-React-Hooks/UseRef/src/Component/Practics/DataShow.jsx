import React from 'react'

const DataShow = (props) => {
    
  return (
    <div>
        {props.userData.map((data, i)=>{
           console.log(data);
            return <li key={i}>{data.userDatamarge}</li>
            
        })}
    </div>
  )
}

export default DataShow